# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

def get_middle(s)
  str_length = s.split(//).length
  if str_length % 2 != 0
    s.split(//)[(str_length / 2)]
  else
    even_str = ""
    even_str.concat(s.split(//)[(str_length / 2) - 1] + s.split(//)[(str_length / 2)])
  end
end

# best case

def get_middle(s)
  s[(s.size-1)/2..s.size/2]
end
