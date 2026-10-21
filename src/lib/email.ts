import { Resend } from 'resend';
import { LeadFormData } from '@/types';

const resendApiKey = process.env.RESEND_API_KEY;
const leadsToEmail = process.env.LEADS_TO_EMAIL || 'pedagogico@snowfieldlanguages.com.br';

export async function sendLeadEmail(lead: LeadFormData, options?: { subject?: string; isTestResult?: boolean; testDetails?: string }) {
  const audienceLabel = {
    filho: 'Meu filho(a)',
    mim: 'Para mim',
    empresa: 'Minha empresa',
  }[lead.audience] || lead.audience;

  const defaultSubject = options?.subject || `[Site] Novo interessado – ${lead.language} – ${audienceLabel}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <div style="background-color: #0891b2; color: #ffffff; padding: 16px; border-radius: 6px; text-align: center;">
        <h2 style="margin: 0;">Novo Lead Recebido - Snowfield Languages</h2>
      </div>

      <div style="padding: 20px 0;">
        <p><strong>Nome:</strong> ${escapeHtml(lead.name)}</p>
        <p><strong>WhatsApp / Telefone:</strong> <a href="https://wa.me/${lead.phone.replace(/\D/g, '')}">${escapeHtml(lead.phone)}</a></p>
        ${lead.email ? `<p><strong>E-mail:</strong> ${escapeHtml(lead.email)}</p>` : ''}
        <p><strong>Público / Para quem:</strong> ${escapeHtml(audienceLabel)}</p>
        <p><strong>Idioma de Interesse:</strong> ${escapeHtml(lead.language)}</p>
        
        ${lead.studentAge ? `<p><strong>Idade do Aluno:</strong> ${escapeHtml(lead.studentAge)}</p>` : ''}
        ${lead.companyName ? `<p><strong>Empresa:</strong> ${escapeHtml(lead.companyName)}</p>` : ''}
        ${lead.jobTitle ? `<p><strong>Cargo:</strong> ${escapeHtml(lead.jobTitle)}</p>` : ''}
        ${lead.employeeCount ? `<p><strong>Nº de Colaboradores:</strong> ${escapeHtml(lead.employeeCount)}</p>` : ''}
        ${lead.condoName ? `<p><strong>Condomínio:</strong> ${escapeHtml(lead.condoName)}</p>` : ''}
        ${lead.neighborhood ? `<p><strong>Bairro:</strong> ${escapeHtml(lead.neighborhood)}</p>` : ''}
        ${lead.approximateInterestedCount ? `<p><strong>Nº Aprox. Interessados:</strong> ${escapeHtml(lead.approximateInterestedCount)}</p>` : ''}
        ${lead.modality ? `<p><strong>Modalidade Preferida:</strong> ${escapeHtml(lead.modality)}</p>` : ''}
        ${lead.goal ? `<p><strong>Objetivo:</strong> ${escapeHtml(lead.goal)}</p>` : ''}
        ${lead.bestTimeToContact ? `<p><strong>Melhor Horário para Contato:</strong> ${escapeHtml(lead.bestTimeToContact)}</p>` : ''}
        ${lead.message ? `<p><strong>Mensagem Adicional:</strong> ${escapeHtml(lead.message)}</p>` : ''}
        
        ${options?.testDetails ? `
          <div style="margin-top: 15px; padding: 12px; background: #f0fdfa; border-left: 4px solid #0891b2;">
            <h4 style="margin: 0 0 8px 0; color: #0f766e;">Resultado do Teste de Nível:</h4>
            ${options.testDetails}
          </div>
        ` : ''}

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <h4 style="margin-bottom: 8px; color: #64748b;">Origem e Rastreamento:</h4>
        <p style="font-size: 13px; color: #64748b;"><strong>Página de Origem:</strong> ${escapeHtml(lead.pageSource || 'Direto')}</p>
        ${lead.utmParams && Object.keys(lead.utmParams).length > 0 ? `
          <p style="font-size: 13px; color: #64748b;"><strong>Parâmetros UTM:</strong> ${JSON.stringify(lead.utmParams)}</p>
        ` : ''}
      </div>

      <div style="font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px;">
        Notificação automática gerada pelo site Snowfield Languages.
      </div>
    </div>
  `;

  if (!resendApiKey) {
    console.log('\n======================================================');
    console.log('📌 [RESEND MOCK / DESENVOLVIMENTO - SEM CHAVE RESEND]');
    console.log(`Para: ${leadsToEmail}`);
    console.log(`Assunto: ${defaultSubject}`);
    console.log('Dados do Lead:', lead);
    if (options?.testDetails) {
      console.log('Detalhes do Teste:', options.testDetails);
    }
    console.log('======================================================\n');
    return { success: true, simulated: true };
  }

  try {
    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: 'Snowfield Languages <noreply@snowfieldlanguages.com.br>',
      to: [leadsToEmail],
      subject: defaultSubject,
      html: htmlContent,
    });

    if (error) {
      console.error('Erro ao enviar e-mail via Resend:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Falha de conexão com Resend:', err);
    return { success: false, error: err.message };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
