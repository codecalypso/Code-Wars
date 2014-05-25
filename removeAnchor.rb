
=begin 
Instructions: Complete the function/method so that it returns
the url with anything after the anchor (#) removed. 

=end
#not sure why this is not passing. Code passed two of the three tests. Third test gives this message:
#TypeError: can't convert nil into String. Will give this challenge another try. FYI, the output renders as expected in ruby console


url='www.codewars.com#about'
def remove_url_anchor(url)
   if url.include? ('#')
    return url.gsub!(/#.*/,'')
  end
end
