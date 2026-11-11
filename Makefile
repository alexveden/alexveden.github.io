.PHONY: serve build clean

serve:
	bundle exec jekyll serve

build:
	bundle exec jekyll build

clean:
	rm -rf _site .jekyll-cache
