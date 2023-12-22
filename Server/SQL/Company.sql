-- Table: public.Company

-- DROP TABLE IF EXISTS public."Company";

CREATE TABLE IF NOT EXISTS public."Company"
(
    id SERIAL PRIMARY KEY,
    first_name character(1) COLLATE pg_catalog."default",
    last_name character(1) COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Company"
    OWNER to postgres;