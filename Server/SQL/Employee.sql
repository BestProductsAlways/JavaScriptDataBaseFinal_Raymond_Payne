-- Table: public.Employee

-- DROP TABLE IF EXISTS public."Employee";

CREATE TABLE IF NOT EXISTS public."Employee"
(
    id SERIAL PRIMARY KEY,
    "Job" character(1) COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    "Company" character(1) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Employee"
    OWNER to postgres;