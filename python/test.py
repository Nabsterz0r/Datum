# -*- coding: utf-8 -*-

import sqlite3
import random

class application:
	"""obj can create a database with 2 tables and fill the random int"""
	def __init__(self):
		#Инициализация переменных
		self.db = sqlite3.connect('mydb.db')
		self.cur = self.db.cursor()
		self.drop()
		self.creatingTable()
		self.fillingTheTables()

	def creatingTable(self):
		#Создаем таблицы
		self.cur.execute('CREATE TABLE IF NOT EXISTS firstTable (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, firstInt INTEGER, secondInt INTEGER)')
		self.cur.execute('CREATE TABLE IF NOT EXISTS secondTable (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, firstInt INTEGER, secondInt INTEGER)')
		self.db.commit()
		print('Таблицы созданы если не существовали')

	def getRandom(self):
		#Получаем случайное число
		return random.randint(0, 100)

	def fillingTheTables(self):
		#Заполняем таблицы
		for x in range(0,10):
			self.cur.execute('INSERT INTO firstTable (firstInt, secondInt) VALUES (?, ?)', ( self.getRandom(), self.getRandom() ) )
			self.cur.execute('INSERT INTO secondTable (firstInt, secondInt) VALUES (?, ?)', ( self.getRandom(), self.getRandom() ) )
		self.db.commit()
		print('Таблицы заполнены')

	def drop(self):
		#Сбрасываем таблицы
		self.cur.execute('DROP TABLE IF EXISTS firstTable')
		self.cur.execute('DROP TABLE IF EXISTS secondTable')
		print('Таблицы сброшены')

	def tableShuffle(self):
		#Сравниваем таблицы и дополняем вторую
		self.cur.execute('SELECT firstInt, secondInt FROM firstTable')
		firstTableData = self.cur.fetchall()
		self.cur.execute('SELECT firstInt, secondInt FROM secondTable')
		secondTableData = self.cur.fetchall()

		diff = [e for e in firstTableData if not e in secondTableData]
		for i in range(0, len(diff)):
			self.cur.execute('INSERT INTO secondTable (firstInt, secondInt) VALUES (?, ?)', diff[i])
		self.db.commit()
		print('Таблицы были сравнены и вторая таблица была дополнена')

def main():
	obj = application()
	obj.tableShuffle()

if __name__ == "__main__":
	main()