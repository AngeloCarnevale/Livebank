FROM python:3.11-alpine

ENV PYTHONUNBUFFERED 1

RUN mkdir /bank-api

WORKDIR /bank-api

COPY . /bank-api/

RUN pip install --upgrade pip

RUN python3 -m pip install -r requirements.txt