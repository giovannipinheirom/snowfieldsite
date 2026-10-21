import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadEmail } from '@/lib/email';
import { LeadFormData } from '@/types';

const testResultSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  phone: z.string().min(8, 'Telefone é obrigatório'),
  email: z.string().email('E-mail válido é obrigatório'),
  lgpdConsent: z.boolean().refine(val => val === true, 'Consentimento é obrigatório'),
  language: z.string().default('Inglês'),
  level: z.string(),
  totalScore: z.number(),
  totalQuestions: z.number(),
  scoresByLevel: z.record(z.string(), z.number()),
  answers: z.record(z.string(), z.string()),
  _gotcha: z.string().optional(),
  _renderedAt: z.number().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Anti-spam honeypot
    if (body._gotcha && body._gotcha.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const parsed = testResultSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Formata os detalhes do teste para o e-mail
    const testDetails = `
      <p><strong>Nível Estimado:</strong> <span style="font-size: 16px; color: #0891b2; font-weight: bold;">${data.level}</span></p>
      <p><strong>Pontuação Total:</strong> ${data.totalScore} de ${data.totalQuestions} acertos</p>
      <p><strong>Pontuação por Nível:</strong></p>
      <ul>
        ${Object.entries(data.scoresByLevel)
          .map(([lvl, score]) => `<li>Nível ${lvl}: ${score} acertos</li>`)
          .join('')}
      </ul>
      <details>
        <summary style="cursor: pointer; color: #0891b2; font-weight: bold;">Ver respostas individuais</summary>
        <pre style="background: #f1f5f9; padding: 10px; border-radius: 4px; font-size: 12px; margin-top: 8px;">
${JSON.stringify(data.answers, null, 2)}
        </pre>
      </details>
    `;

    const leadPayload: LeadFormData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      audience: 'mim',
      language: data.language,
      lgpdConsent: data.lgpdConsent,
      goal: `Teste de Nível (${data.level})`,
      pageSource: '/teste-de-nivel',
    };

    const subject = `[Teste de Nível] ${data.name} – Nível ${data.level} (${data.totalScore}/${data.totalQuestions})`;

    await sendLeadEmail(leadPayload, {
      subject,
      isTestResult: true,
      testDetails,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Erro no handler /api/teste-resultado:', err);
    return NextResponse.json({ success: false, error: 'Erro ao registrar teste' }, { status: 500 });
  }
}
