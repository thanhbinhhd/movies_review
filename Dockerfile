FROM ruby:2.7.6

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /app
WORKDIR /app 
COPY Gemfile Gemfile.lock /app/
RUN gem install bundler:1.17.2
RUN bundle install
ADD . /app