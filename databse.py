from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# UPDATE THIS LINE with your MySQL password and database name
# Format: mysql+pymysql://username:password@localhost/databasename
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:bsnl1546@localhost/dshare_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()