from django.db import models

class Dizimo(models.Model):
    nome = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    data = models.DateField()

    def __str__(self):
        return f'{self.nome} - {self.valor}'

class Oferta(models.Model):
    nome = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    data = models.DateField()

    def __str__(self):
        return f'{self.nome} - {self.valor}'

class Gasto(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    data = models.DateField()

    def __str__(self):
        return self.descricao

class Conta(models.Model):
    TIPO_CHOICES = [
        ('energia', 'Energia'),
        ('agua', 'Água'),
    ]
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    data = models.DateField()

    def __str__(self):
        return f'{self.get_tipo_display()} - {self.valor}'

class Contribuicao(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    nome = models.CharField(max_length=100)
    data = models.DateField()

    def __str__(self):
        return f'{self.nome} - {self.valor}'
