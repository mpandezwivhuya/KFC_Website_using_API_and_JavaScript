# use pool when want to create multiple tables or method 
from psycopg2 import pool

conn_pool = pool.SimpleConnectionPool(
    # 1 is minimum and 20 maximum
    1, 20,
    database = "KFC",
    user = "postgres",
    password = "Rotondwa@1996",
    host = "127.0.0.1",
    port = "5432"
    
)
#print('pool created')

class classDB:
   
    def __init__(self, table):
        self.table = table
        self.pool = conn_pool 
    def select(self, columns, condition = None):
        conn= self.pool.getconn()
        cursor = conn.cursor()
        #cursor.execute("SELECT" + columns + "FROM" + self.table)
        query = "SELECT %s FROM %s" % (columns, self.table)

        if(condition):
            query = query + " WHERE " + condition

        cursor.execute(query)
        return cursor.fetchall()
    
    def insert(self, columns, values):
        conn= self.pool.getconn()
        cursor = conn.cursor()

        query= "INSERT INTO %s(%s) VALUES (%s)" % (self.table, columns, values)
        cursor.execute(query)
        conn.commit()
        return
        #update customer set surname = Negovhela where number = 125
    
    def update(self, to_update, condition):
        conn= self.pool.getconn()
        cursor = conn.cursor()
        query = "UPDATE customer SET %s WHERE %s"% (to_update, condition)
        cursor.execute(query)
        conn.commit()
        return
DTable = classDB("Drinks")
STable = classDB("Streetwise")
BTable = classDB("Burgers")
WTable = classDB("Wings")
TreTable = classDB("Treats")
TwiTable = classDB("Twisters")
BucTable = classDB("Buckets")
FTable = classDB("FamilyTreat")
#personTable = classDB("person")
#customerTable = classDB("customer")
#productTable = classDB("product")
#customerTable.update("surname = 'Negovhela'", "number = 1235")
#customerTable.insert('number, name, surname', "1346, 'Rudzani', 'Mulatedzi'")
#rows = customerTable.select("*")
#rows = personTable.select("*")
#rows = productTable.select("*")
#rows = DTable.select("*")
#for row in rows:
    #print("Customer ID number: ", row[0])
    #print("Customer first name: ", row[1])
    #print("Customer age: ", row[2])
    #print("Customer age: ", row[3])
    #print("Customer age: ", row[4])
    #print('\n')


# %s is for string
#%d is for number
