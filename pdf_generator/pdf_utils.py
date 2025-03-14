from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import io
from django.http import FileResponse

def generate_pdf(request, month, year, data):
    """
    Gera um PDF com os dados financeiros do mês.
    'data' deve ser um dicionário com as informações necessárias.
    """
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=letter)
    width, height = letter

    c.setFont("Helvetica", 14)
    c.drawString(100, height - 50, f"Relatório Financeiro - {month}/{year}")

    y = height - 100
    c.setFont("Helvetica", 12)
    for key, value in data.items():
        c.drawString(50, y, f"{key}: {value}")
        y -= 20

    c.showPage()
    c.save()
    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename=f"relatorio_{month}_{year}.pdf")
