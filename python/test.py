import sqlite3
import random

def main():

	class obj:
		"""obj can creating a database with 2 tables and fill in they random int"""
		def __init__(self):
			#Инициализация переменных
			self.db = sqlite3.connect('mydb.db')
			self.cur = self.db.cursor()
				
		def creatingTable(self):
			#Создаем таблицы
			self.cur.execute('CREATE TABLE IF NOT EXISTS firstTable (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, firstInt INTEGER, secondInt INTEGER)')
			self.cur.execute('CREATE TABLE IF NOT EXISTS secondTable (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, firstInt INTEGER, secondInt INTEGER)')
			print('tables was succefully created!')
			self.db.commit()

		def getRandom():
			#Получаем случайное число
			return random.randint(0, 100)

		def fillingTheTables(self):
			#Заполняем таблицы
			for x in range(0,10):
				self.cur.execute('INSERT INTO firstTable (firstInt, secondInt) VALUES (?, ?)', ( obj.getRandom(), obj.getRandom() ) )
				self.cur.execute('INSERT INTO secondTable (firstInt, secondInt) VALUES (?, ?)', ( obj.getRandom(), obj.getRandom() ) )
			self.db.commit()

		def drop(self):
			#Сбрасываем таблицы
			self.cur.execute('DROP TABLE IF EXISTS firstTable')
			self.cur.execute('DROP TABLE IF EXISTS secondTable')

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

	obj1 = obj()

	obj1.drop()
	obj1.creatingTable()
	obj1.fillingTheTables()
	obj1.tableShuffle()

main()
