DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- DROP TABLE platforms;
CREATE TABLE debtors (
	id_debtor SERIAL,
	id_user int NOT NULL,
	reason text NOT NULL,
	value int NOT NULL,
	details json NOT NULL,
	date_debtor date NOT NULL,
	date_inserted timestamptz NOT null
);