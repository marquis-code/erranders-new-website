export const useGreetingAndQuote = () => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        return 'Good morning';
      } else if (currentHour < 18) {
        return 'Good afternoon';
      } else {
        return 'Good evening';
      }
    };
  
    const quotes = [
      "Success is not the key to happiness. Happiness is the key to success.",
      "The only limit to our realization of tomorrow is our doubts of today.",
      "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
      "Your health is your wealth.",
      "The secret of business is to know something that nobody else knows.",
      "Opportunities don't happen. You create them.",
      "The way to get started is to quit talking and begin doing.",
      "Education is the most powerful weapon which you can use to change the world.",
      "The best investment you can make is in yourself.",
      "Entrepreneurship is neither a science nor an art. It is a practice.",
      "The road to success and the road to failure are almost exactly the same.",
      "It always seems impossible until it’s done.",
      "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.",
      "Success usually comes to those who are too busy to be looking for it.",
      "Don't watch the clock; do what it does. Keep going."
    ];
  
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };
  
    return {
      greeting: getGreeting(),
      quote: getRandomQuote()
    };
  };
  