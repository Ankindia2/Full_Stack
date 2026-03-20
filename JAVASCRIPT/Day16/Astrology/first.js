const zodiacSigns = ["Capricorn","Aquarius","Pisces","Aries","Taurus"
    ,"Gemini","Cancer","Leo","Virgo","Scorpio","Sagittarius"];

const compliments = [
    
  "Your stars show strong leadership energy in you.",
  "You have a naturally magnetic personality.",
  "Your destiny favors success through hard work.",
  "You are blessed with sharp intelligence.",
  "Your aura attracts positive people.",
  "You have a strong mind and clear thinking.",
  "Your future shows steady growth and stability.",
  "You are naturally lucky in learning new skills.",
  "Your confidence will open big opportunities.",
  "You are guided by positive planetary energy.",
  "Your determination is your biggest strength.",
  "You are meant to achieve something meaningful.",
  "Your patience will bring long-term success.",
  "You have a creative and innovative mindset.",
  "Your stars support financial growth.",
  "You are protected from major negative influences.",
  "Your communication skills will bring you respect.",
  "You are destined to inspire others.",
  "Your inner strength is very powerful.",
  "Your focus will turn dreams into reality.",
  "You have strong problem-solving abilities.",
  "Your personality attracts trust and respect.",
  "Your efforts will be rewarded at the right time.",
  "You have a natural ability to lead others.",
  "Your destiny supports continuous improvement.",
  "You are emotionally strong and balanced.",
  "Your mindset is aligned with success.",
  "You have good karmic energy working for you.",
  "Your future holds recognition and growth.",
  "You are meant for a stable and successful life.",
  "Your positive attitude attracts good fortune."
];

const victimCardCompliments = [
  "You have faced more challenges than most people your age.",
  "Your struggles have made you emotionally stronger.",
  "Not everyone understands how much you have been through.",
  "Your life lessons have given you deep wisdom.",
  "You carry responsibilities that others don’t see.",
  "Your pain has shaped your strong character.",
  "You have survived situations that would break many people.",
  "Your patience shows how strong your soul really is.",
  "You have grown through difficulties, not comfort.",
  "Your journey has been tougher than it looks from outside.",
  "You have learned strength the hard way.",
  "Your experiences have made you more mature than others.",
  "You have carried silent battles with great courage.",
  "Your past has tested you, but you are still standing.",
  "You understand pain, which makes you more compassionate.",
  "Your life has demanded more strength from you than average.",
  "You have been strong even when you felt weak inside.",
  "Your struggles have built a powerful inner core.",
  "You deserve credit for how much you have endured.",
  "Your journey shows the mark of a true fighter."
];

const recommendations = [
  "Avoid overthinking and trust the timing of your life.",
  "Focus on one goal at a time to reduce mental pressure.",
  "Start your day with a clear plan to remove confusion.",
  "Distance yourself from negative people to protect your energy.",
  "Be patient — some problems solve themselves with time.",
  "Improve sleep to balance your mental and emotional state.",
  "Write your worries down to release mental burden.",
  "Trust your instincts when making important decisions.",
  "Stop comparing your journey with others.",
  "Spend time in silence to gain inner clarity.",
  "Work consistently instead of waiting for perfect moments.",
  "Take short breaks to avoid emotional burnout.",
  "Practice gratitude to shift your mindset positively.",
  "Let go of things you cannot control.",
  "Create small daily habits to fix big life issues.",
  "Speak your feelings instead of suppressing them.",
  "Organize your surroundings to bring mental peace.",
  "Trust that setbacks are preparing you for better outcomes.",
  "Protect your time from unnecessary distractions.",
  "Listen more to your inner voice than outside noise.",
  "Forgive past mistakes to free your mental space.",
  "Break big problems into smaller manageable parts.",
  "Avoid impulsive decisions during emotional stress.",
  "Keep learning to open new opportunities.",
  "Stay disciplined even when motivation is low.",
  "Reduce overcommitment to avoid mental overload.",
  "Believe that every phase will eventually pass.",
  "Focus on health to strengthen your overall life balance.",
  "Accept change as a part of your growth.",
  "Trust that consistent effort will solve long-term problems."
];

const predictions = [
  "A new opportunity will appear when you least expect it.",
  "The coming phase will bring gradual improvement in your life.",
  "You will soon receive clarity about an important decision.",
  "Your hard work will start showing visible results.",
  "A supportive person will enter your life at the right time.",
  "Financial stability will improve with disciplined effort.",
  "A long-standing worry will slowly begin to fade.",
  "Your confidence will increase in the coming period.",
  "You will feel more focused on your true goals.",
  "A positive change in routine will bring better results.",
  "Recognition for your efforts is on the way.",
  "Your mindset will shift toward more growth and maturity.",
  "You will gain better control over your emotions.",
  "A delayed plan will finally start moving forward.",
  "Your energy levels will improve with better balance.",
  "You will attract new learning opportunities.",
  "A challenge will turn into a valuable lesson.",
  "Your patience will be rewarded in the near future.",
  "You will feel more motivated to work on yourself.",
  "A phase of steady progress is approaching."
];


const form = document.getElementById('astroForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
     const day = parseInt(document.getElementById('day').value);
     const month = parseInt(document.getElementById('month').value);
     const year = parseInt(document.getElementById('year').value);

const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}
.${compliments[day-1]}. ${victimCardCompliments[year%20]}. ${recommendations[(day*month)%month]}
. ${predictions[(name.length*surname.length)%20]}`;

document.getElementById('result').textContent = text;

})





