-- Table: public.Customer

-- DROP TABLE IF EXISTS public."Customer";

CREATE TABLE IF NOT EXISTS public."Customer"
(
    id SERIAL PRIMARY KEY,
    "Company" character(1) COLLATE pg_catalog."default",
    email character(1) COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Customer"
    OWNER to postgres;