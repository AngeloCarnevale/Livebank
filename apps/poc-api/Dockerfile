FROM python:3.11-alpine

ENV PYTHONUNBUFFERED 1

RUN mkdir /bank-api

WORKDIR /bank-api

COPY . /bank-api/

RUN pip install --upgrade pip && \ 
    apk add --update --no-cache postgresql-client jpeg-dev && \
    apk add --update --no-cache --virtual .tmp-build-deps \
    build-base postgresql-dev musl-dev zlib zlib-dev linux-headers

RUN python3 -m pip install -r requirements.txt