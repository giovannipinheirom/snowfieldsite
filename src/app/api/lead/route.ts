import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadEmail } from '@/lib/email';
import { LeadFormData } from '@/types';

const leadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  phone: z.string().min(8, 'Telefone inválido'),
  audience: z.enum(['filho', 'mim', 'empresa']),
  language: z.string().min(1, 'Selecione o idioma'),
  lgpdConsent: z.boolean().refine(val => val === true, 'O consentimento é obrigatório'),
  email: z.string().email('E-mail inválido').optional().or(z.literal('')),
  studentAge: z.string().optional(),
  companyName: z.string().optional(),
  employeeCount: z.string().optional(),
  jobTitle: z.string().optional(),
  modality: z.string().optional(),
  goal: z.string().optional(),
  bestTimeToContact: z.string().optional(),
  message: z.string().optional(),
  condoName: z.string().optional(),
  neighborhood: z.string().optional(),
  approximateInterestedCount: z.string().optional(),
  pageSource: z.string().optional(),
  utmParams: z.record(z.string(), z.string()).optional(),
  _gotcha: z.string().optional(),
  _renderedAt: z.number().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Checagem Anti-Spam: Honeypot
    if (body._gotcha && body._gotcha.trim().length > 0) {
      console.warn('Bot detectado pelo campo honeypot _gotcha');
      return NextResponse.json({ success: true, message: 'Processado' }, { status: 200 });
    }

    // 2. Checagem Anti-Spam: Tempo mínimo de preenchimento (2 segundos)
    if (body._renderedAt) {
      const durationMs = Date.now() - body._renderedAt;
      if (durationMs < 1800) {
        console.warn(`Submissão muito rápida (${durationMs}ms) - possível bot`);
        return NextResponse.json({ success: true, message: 'Processado' }, { status: 200 });
      }
    }

    // 3. Validação dos dados
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // 4. Envio de e-mail / Log defensivo
    const result = await sendLeadEmail(parsed.data as LeadFormData);

    return NextResponse.json({ success: true, simulated: result.simulated });
  } catch (err: any) {
    console.error('Erro no handler /api/lead:', err);
    return NextResponse.json({ success: false, error: 'Erro interno ao processar lead' }, { status: 500 });
  }
}
