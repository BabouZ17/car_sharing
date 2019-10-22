FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y
RUN apt-get install \
	software-properties-common -y \
	python3-pip -y \
	tzdata -y

# Install the libraries
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Move the files to the container filesystem
COPY . /home/car_sharing/backend
WORKDIR /home/car_sharing/backend
