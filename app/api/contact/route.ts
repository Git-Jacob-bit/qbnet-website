import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicjalizacja Resend z użyciem klucza z .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Podstawowa walidacja
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Brakujące dane' }, { status: 400 });
    }

    const data = await resend.emails.send({
      // ZANIM ZWERYFIKUJESZ DOMENĘ: użyj 'onboarding@resend.dev'
      // PO WERYFIKACJI DOMENY: zmień na np. 'Kontakt <kontakt@qb-net.pl>'
      from: 'onboarding@resend.dev', 
      
      // Tutaj wpisz SWÓJ e-mail, na który chcesz OTRZYMYWAĆ zapytania od klientów
      // (Podczas testów z 'onboarding@resend.dev' musi to być mail, na który założyłeś konto Resend!)
      to: 'jakub.czechowski12321@gmail.com', 
      
      subject: `Nowa wiadomość ze strony od: ${name}`,
      // Możesz też użyć react-email do pięknych szablonów HTML, 
      // ale na start czysty tekst wystarczy:
      text: `Imię: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Błąd podczas wysyłania' }, { status: 500 });
  }
}