$(document).ready(function(){
  $('.uwon').hide()
  $('.losing').hide()
  $('.winning').hide()
    $('span').click(function(){
      setTimeout(() => {
        start = true
      },1000)
      $(this).parent().remove()
    })
    
    words = ['frozen','house','catwoman','absurd','awkward','bikini','buffalo','duplex','equip','funny','gossip','icebox','injury','jigsaw','jogging','juicy','luxury','matrix','puppy','quiz','rhythm','strength','stretch','subway','transplant','unworthy','vodka','wave','wizard','zigzag','zodiac','zombie']
    oldWords = [...words]
    point = 0
    function newWord(){
      if(words.length == 0){
      $('.uwon').fadeIn()
      return
      }
      realWord = words[Math.floor(Math.random() * words.length)]
      words = words.filter(a => a != realWord)
      console.log(realWord,words)
      fakeWord = (new Array(realWord.length)).fill('-')
      $('header').text(fakeWord.join(' '))
      classes = ['.second','.third','.forth','.fifth','.sixth','.seventh']
      for(k of classes){
        $(k).css('visibility','hidden')
      }
    }
    newWord()
    $(':text').on('input', function(){ 
    Wrong = true
    var letter = $(this)[0].value
    if(realWord.includes(letter)){
      fakeWord.forEach((a,b) => {
        if(realWord[b] == letter){
          fakeWord[b] = letter
          Wrong = false
        }
      })
      $('header').text(fakeWord.join(' '))
    }
    if(Wrong){
        $(classes.shift()).css('visibility','visible')
      }
    if(classes.length == 0){
      $('header').text(realWord)
      setTimeout(() => {$('.losing').slideDown('slow',() => {$('.losing').slideUp(); 
      point = 0
      changePoint()
      words = [...oldWords]
      newWord()})},2000)
     }
     if(realWord == fakeWord.join('')){
     $('.winning').slideDown('slow',() => {
     point++
     changePoint()
     $('.winning').slideUp('slow',newWord())
     
     })
     }
     
    $(this)[0].value = ''
    });
    function changePoint(){
      $('.point').text(point)
    }
    function uWon(){
      
    }
  });