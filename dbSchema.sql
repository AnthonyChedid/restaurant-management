--
-- PostgreSQL database dump
--

-- Dumped from database version 10.15
-- Dumped by pg_dump version 10.15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: restaurant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant (
    id_restaurant bigint NOT NULL,
    address character varying(255),
    cost bigint,
    image character varying(255),
    phone character varying(255),
    restaurant_name character varying(255),
    restaurant_type character varying(255)
);


ALTER TABLE public.restaurant OWNER TO postgres;

--
-- Name: restaurant_id_restaurant_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurant_id_restaurant_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurant_id_restaurant_seq OWNER TO postgres;

--
-- Name: restaurant_id_restaurant_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurant_id_restaurant_seq OWNED BY public.restaurant.id_restaurant;


--
-- Name: visited; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.visited (
    id uuid NOT NULL,
    date character varying(255),
    restaurant character varying(255)
);


ALTER TABLE public.visited OWNER TO postgres;

--
-- Name: restaurant id_restaurant; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant ALTER COLUMN id_restaurant SET DEFAULT nextval('public.restaurant_id_restaurant_seq'::regclass);


--
-- Name: restaurant restaurant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT restaurant_pkey PRIMARY KEY (id_restaurant);


--
-- Name: visited visited_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visited
    ADD CONSTRAINT visited_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

