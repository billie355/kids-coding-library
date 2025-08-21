// Kids Code Library v2 – Full Courses

const subjects = [
  { id: 'html', name: 'HTML', desc: 'Build the structure of web pages', icon: 'assets/illustrations/html.svg' },
  { id: 'css', name: 'CSS', desc: 'Style and layout for the web', icon: 'assets/illustrations/css.svg' },
  { id: 'js', name: 'JavaScript', desc: 'Make web pages interactive', icon: 'assets/illustrations/js.svg' },
  { id: 'python', name: 'Python', desc: 'Friendly general-purpose language', icon: 'assets/illustrations/python.svg' },
  { id: 'django', name: 'Django', desc: 'Build full web apps with Python', icon: 'assets/illustrations/django.svg' },
  { id: 'java', name: 'Java', desc: 'Popular, strongly typed language', icon: 'assets/illustrations/java.svg' },
  { id: 'lua', name: 'Lua', desc: 'Small scripting language for games', icon: 'assets/illustrations/lua.svg' },
  { id: 'csharp', name: 'C#', desc: 'Modern language for .NET & Unity', icon: 'assets/illustrations/csharp.svg' },
  { id: 'cpp', name: 'C++', desc: 'Powerful language for fast programs', icon: 'assets/illustrations/cpp.svg' }
];

// Helper to make code blocks safer
const esc = s => (s||'').replaceAll('<','&lt;').replaceAll('>','&gt;');

// Big course content
const courseContent = {
  html: [
    {title:'Welcome to HTML', icon:'book.svg', badges:['Beginner'], body:`HTML means <b>HyperText Markup Language</b>. It tells the browser what each part of the page is. A page is made of <b>elements</b> written with <b>tags</b>.`, code:`<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello!</h1>\n    <p>This is my first page.</p>\n  </body>\n</html>`},
    {title:'Elements, Tags, and Attributes', icon:'puzzle.svg', badges:['Beginner'], body:`An element usually has an opening tag and a closing tag. <code>Attributes</code> give extra info, like <code>href</code> for links.`, code:`<a href="https://example.com" target="_blank">Visit Example</a>\n<img src="cat.png" alt="A cute cat" width="200">`},
    {title:'Headings & Paragraphs', icon:'bulb.svg', badges:['Beginner'], body:`Use <code>&lt;h1&gt;</code>.. <code>&lt;h6&gt;</code> for headings. <code>&lt;p&gt;</code> for paragraphs.`, code:`<h1>Big Title</h1>\n<h2>Smaller Title</h2>\n<p>Readable text goes here.</p>`},
    {title:'Lists (ul, ol) & Links', icon:'list.svg', badges:['Beginner'], body:`Bullet lists use <code>&lt;ul&gt;</code>; numbered lists use <code>&lt;ol&gt;</code>. Links use <code>&lt;a&gt;</code>.`, code:`<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>`},
    {title:'Images & Figure', icon:'rocket.svg', badges:['Beginner'], body:`Use <code>&lt;img&gt;</code> with <code>alt</code> text for accessibility. Wrap with <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for captions.`, code:`<figure>\n  <img src="dog.jpg" alt="Brown dog running" width="260">\n  <figcaption>My dog, Coco</figcaption>\n</figure>`},
    {title:'Tables', icon:'grid.svg', badges:['Beginner'], body:`Tables show data in rows and columns using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code>.`, code:`<table>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ana</td><td>9</td></tr>\n</table>`},
    {title:'Semantic HTML', icon:'book.svg', badges:['Core'], body:`Use meaningful tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code> so both people and machines understand your page.`, code:`<header>Site Title</header>\n<nav>Menu</nav>\n<main>\n  <article>Story...</article>\n</main>\n<footer>© 2025</footer>`},
    {title:'Forms Basics', icon:'form.svg', badges:['Core'], body:`Forms collect input using <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, and <code>&lt;input&gt;</code>. Always connect labels to inputs using the <code>for</code> and <code>id</code> attributes.`, code:`<form>\n  <label for="name">Name</label>\n  <input id="name" name="name" type="text" required>\n  <button type="submit">Send</button>\n</form>`},
    {title:'Form Controls', icon:'form.svg', badges:['Core'], body:`Common controls: text, number, checkbox, radio, select, textarea. Use <code>name</code> to give each input a key.`, code:`<label><input type="checkbox" name="agree"> I agree</label>\n<select name="pet">\n  <option>Cat</option>\n  <option>Dog</option>\n</select>`},
    {title:'Accessible HTML (a11y)', icon:'shield.svg', badges:['Best Practice'], body:`Use proper headings order, alt text for images, labels for inputs, and enough color contrast. Use ARIA only when needed.`, code:`<img src="map.png" alt="Map of the playground">`},
    {title:'Project: Animal Wiki Page', icon:'star.svg', badges:['Project'], body:`Create a page about your favorite animal with a hero heading, a picture with caption, a list of facts, and a link to an external resource.`},
    {title:'Responsive Meta & Media', icon:'mobile.svg', badges:['Core'], body:`Add the viewport meta tag and use responsive images (<code>width</code> in CSS, not HTML) so pages look good on phones.`, code:`<meta name="viewport" content="width=device-width, initial-scale=1">`},
    {title:'Embedding Media (audio, video)', icon:'rocket.svg', badges:['Core'], body:`You can embed audio and video with built‑in controls.`, code:`<video src="movie.mp4" controls width="320"></video>`},
    {title:'Project: Multi‑section Article', icon:'star.svg', badges:['Project'], body:`Write a long article using semantic sections and a table of contents.`}
  ],
  css: [
    {title:'Welcome to CSS', icon:'css.svg', badges:['Beginner'], body:'CSS styles HTML: colors, spacing, layout, animation.', code:`h1 { color: #2563eb; }\np { line-height: 1.6; }`},
    {title:'Selectors', icon:'puzzle.svg', badges:['Core'], body:'Basic selectors: element, class, id. Also descendant and child selectors.', code:`/* element */ h1 {}\n/* class */ .card {}\n/* id */ #main {}`},
    {title:'Colors, Units, Variables', icon:'bulb.svg', badges:['Core'], body:'Use hex, rgb, hsl. Units: px, %, rem, vw. CSS variables store values.', code:`:root{ --brand: hsl(220 80% 50%); }\nbutton{ background: var(--brand); }`},
    {title:'Box Model', icon:'grid.svg', badges:['Core'], body:'Every element is a box with content, padding, border, and margin.', code:`.box{ padding: 12px; border: 2px solid #ddd; margin: 8px; }`},
    {title:'Typography', icon:'book.svg', badges:['Core'], body:'Good reading needs proper size, weight, spacing, contrast.', code:`body{ font: 16px/1.6 system-ui; color:#1f2937 }`},
    {title:'Display & Position', icon:'puzzle.svg', badges:['Core'], body:'Control layout using display, position, z-index.', code:`.badge{ display:inline-block; position:relative; top:-2px }`},
    {title:'Flexbox', icon:'grid.svg', badges:['Core'], body:'Layout items in a row/column, with alignment and spacing.', code:`.row{ display:flex; gap:12px; justify-content:center; align-items:center }`},
    {title:'Grid', icon:'grid.svg', badges:['Core'], body:'Two‑dimensional layout with rows and columns.', code:`.grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px }`},
    {title:'Responsive Design', icon:'mobile.svg', badges:['Best Practice'], body:'Use media queries to adapt to different screens.', code:`@media (max-width:600px){ .grid{ grid-template-columns:1fr } }`},
    {title:'Pseudo‑classes & Pseudo‑elements', icon:'puzzle.svg', badges:['Core'], body:'Style states like :hover, and parts like ::before.', code:`a:hover{ text-decoration:underline }\n.button::before{ content:'★ '; }`},
    {title:'Transitions & Transforms', icon:'rocket.svg', badges:['Core'], body:'Animate changes smoothly.', code:`.card{ transition: transform .2s } .card:hover{ transform: translateY(-4px) }`},
    {title:'Animations (keyframes)', icon:'rocket.svg', badges:['Core'], body:'Create repeating animations.', code:`@keyframes float { from{transform:translateY(0)} to{transform:translateY(6px)} }`},
    {title:'Project: Cute Profile Card', icon:'star.svg', badges:['Project'], body:'Build a responsive profile card with hover effects and grid.'},
    {title:'Project: Landing Page', icon:'star.svg', badges:['Project'], body:'Make a landing page with a hero, features grid, and footer.'}
  ],
  js: [
    {title:'Welcome to JavaScript', icon:'js.svg', badges:['Beginner'], body:'JavaScript runs in the browser and adds interactivity.', code:`alert('Hello!');`},
    {title:'Values, Variables, Types', icon:'puzzle.svg', badges:['Core'], body:'Use let/const. Types: number, string, boolean, null, undefined, object.', code:`const name='Maya'; let age=10; const happy=true;`},
    {title:'Operators & Expressions', icon:'bulb.svg', badges:['Core'], body:'+ - * / % ** for math; === !== < > for compare; && || ! for logic.', code:`const big = 7>3 && 4<9;`},
    {title:'Strings & Numbers', icon:'book.svg', badges:['Core'], body:'Use template strings and Math.', code:'const pi = Math.PI; const msg = `Hi ${name}`;'},
    {title:'Arrays & Objects', icon:'grid.svg', badges:['Core'], body:'Arrays store lists; objects store key/value pairs.', code:`const pets=['cat','dog']; const user={name:'Maya', age:10};`},
    {title:'Functions', icon:'gear.svg', badges:['Core'], body:'Functions are reusable code blocks.', code:`function add(a,b){ return a+b }`},
    {title:'Control Flow (if/switch)', icon:'puzzle.svg', badges:['Core'], body:'Choose paths with if/else or switch.', code:`if(age>9){ console.log('big kid') }`},
    {title:'Loops', icon:'loop.svg', badges:['Core'], body:'Repeat with for, while, for..of.', code:`for(const p of pets){ console.log(p) }`},
    {title:'DOM Basics', icon:'rocket.svg', badges:['Web'], body:'Select elements and change them.', code:`document.querySelector('#btn').onclick=()=> alert('clicked')`},
    {title:'Events', icon:'rocket.svg', badges:['Web'], body:'React to clicks, input, submit.', code:`el.addEventListener('click', handler)`},
    {title:'Fetch & JSON', icon:'cloud.svg', badges:['Web'], body:'Get data from a server and read JSON.', code:`fetch('/data.json').then(r=>r.json()).then(console.log)`},
    {title:'LocalStorage', icon:'book.svg', badges:['Web'], body:'Save small data in the browser.', code:`localStorage.setItem('name','Maya')`},
    {title:'Modules & ES6+', icon:'gear.svg', badges:['Core'], body:'Use import/export, arrow functions, let/const, default params.', code:`export function add(a,b){ return a+b }`},
    {title:'Async/Await', icon:'gear.svg', badges:['Core'], body:'Write asynchronous code that looks synchronous.', code:`const data = await (await fetch('/x.json')).json()`},
    {title:'Project: Click Counter', icon:'star.svg', badges:['Project'], body:'Build a button that counts clicks and stores the number.'},
    {title:'Project: To‑Do List', icon:'star.svg', badges:['Project'], body:'Create a simple to‑do app with localStorage.'}
  ],
  python: [
    {title:'Welcome to Python', icon:'python.svg', badges:['Beginner'], body:'Python is readable and friendly.', code:`print('Hello!')`},
    {title:'Variables & Types', icon:'puzzle.svg', badges:['Core'], body:'int, float, str, bool. No need to declare types first.', code:`age=10; pi=3.14; name='Maya'; happy=True`},
    {title:'Math & Strings', icon:'book.svg', badges:['Core'], body:'Use + - * / // % **. Strings use + or f-strings.', code:`print(7//3); print(f'Hi {name}')`},
    {title:'Lists & Tuples', icon:'grid.svg', badges:['Core'], body:'Lists are mutable; tuples are not.', code:`pets=['cat','dog']; pos=(10,20)`},
    {title:'Dictionaries & Sets', icon:'grid.svg', badges:['Core'], body:'Dict stores key/value; set stores unique items.', code:`user={'name':'Maya','age':10}; seen={1,2,2,3}`},
    {title:'If, For, While', icon:'loop.svg', badges:['Core'], body:'Indentation defines blocks.', code:`for i in range(3): print(i)\nif age>9: print('big kid')`},
    {title:'Functions', icon:'gear.svg', badges:['Core'], body:'Use def to define functions. Return values with return.', code:`def add(a,b): return a+b`},
    {title:'Modules & Packages', icon:'gear.svg', badges:['Core'], body:'Organize code in files and folders. Use import.', code:`import math; print(math.sqrt(9))`},
    {title:'Files I/O', icon:'book.svg', badges:['Core'], body:'Read and write text files.', code:`with open('note.txt','w') as f: f.write('hi')`},
    {title:'Errors & Exceptions', icon:'shield.svg', badges:['Core'], body:'Catch errors with try/except.', code:`try: x=int('a')\nexcept ValueError: print('oops')`},
    {title:'Virtual Envs & pip (concept)', icon:'cloud.svg', badges:['Best Practice'], body:'Use venv to isolate packages; pip to install.', code:`python -m venv .venv\nsource .venv/bin/activate\npip install requests`},
    {title:'OOP Basics', icon:'gear.svg', badges:['Core'], body:'Create classes with methods and attributes.', code:`class Dog:\n  def __init__(self,name): self.name=name\n  def bark(self): print(self.name,'woof!')`},
    {title:'Project: Number Guesser', icon:'star.svg', badges:['Project'], body:'Pick a secret number (1–20). Ask until guessed.'},
    {title:'Project: Word Counter', icon:'star.svg', badges:['Project'], body:'Read a file and count words and letters.'}
  ],
  django: [
    {title:'What is Django?', icon:'django.svg', badges:['Beginner'], body:'Django is a Python web framework to build full sites fast.'},
    {title:'MVT Pattern', icon:'book.svg', badges:['Core'], body:'Model (data), View (logic), Template (HTML).'},
    {title:'Start Project', icon:'gear.svg', badges:['Core'], body:'Install Django and create a project.', code:`pip install django\ndjango-admin startproject mysite\ncd mysite\npython manage.py runserver`},
    {title:'Create App & View', icon:'book.svg', badges:['Core'], body:'Create an app and a simple view.', code:`python manage.py startapp blog\n# blog/views.py\nfrom django.http import HttpResponse\ndef home(request):\n    return HttpResponse('Hello')`},
    {title:'URLs', icon:'link.svg', badges:['Core'], body:'Map URLs to views.', code:`# mysite/urls.py\nfrom django.urls import path, include\nurlpatterns=[ path('', include('blog.urls')) ]`},
    {title:'Templates', icon:'book.svg', badges:['Core'], body:'Use the template engine.', code:`# blog/templates/home.html\n<h1>{{ title }}</h1>`},
    {title:'Static Files', icon:'paint.svg', badges:['Core'], body:'Serve CSS/JS/images.', code:`STATIC_URL = 'static/'`},
    {title:'Models & Migrations', icon:'database.svg', badges:['Core'], body:'Define models and create tables.', code:`class Post(models.Model): title=models.CharField(max_length=100)`},
    {title:'Admin', icon:'shield.svg', badges:['Core'], body:'Use the admin site to add content.', code:`admin.site.register(Post)`},
    {title:'ORM Queries', icon:'database.svg', badges:['Core'], body:'Create, read, filter, order.', code:`Post.objects.filter(title__icontains='hi')`},
    {title:'Forms', icon:'form.svg', badges:['Core'], body:'Use Django forms for validation.'},
    {title:'Auth (Login/Logout)', icon:'shield.svg', badges:['Core'], body:'Built‑in user system (concept).'},
    {title:'Security Basics', icon:'shield.svg', badges:['Best Practice'], body:'CSRF token, XSS protection, secret key.'},
    {title:'Project: Mini Blog', icon:'star.svg', badges:['Project'], body:'Create Post model, list page, detail page, admin.'}
  ],
  java: [
    {title:'Welcome to Java', icon:'java.svg', badges:['Beginner'], body:'Write once, run anywhere on the JVM.'},
    {title:'Hello World', icon:'book.svg', badges:['Core'], body:'Every program starts at main.', code:`class Hello{ public static void main(String[] a){ System.out.println("Hi"); } }`},
    {title:'Variables & Types', icon:'puzzle.svg', badges:['Core'], body:'int, double, boolean, String.', code:`int age=10; String name="Maya";`},
    {title:'If & Loops', icon:'loop.svg', badges:['Core'], body:'if/else, for, while.', code:`for(int i=0;i<3;i++){ System.out.println(i); }`},
    {title:'Methods', icon:'gear.svg', badges:['Core'], body:'Reusable code in classes.', code:`static int add(int a,int b){ return a+b }`},
    {title:'Classes & Objects', icon:'gear.svg', badges:['Core'], body:'Blueprints for objects.', code:`class Dog{ String name; Dog(String n){name=n;} void bark(){ System.out.println(name+" woof!"); } }`},
    {title:'Arrays & Lists', icon:'grid.svg', badges:['Core'], body:'Fixed arrays vs dynamic ArrayList.', code:`int[] a={1,2,3}; List<Integer> b=new ArrayList<>();`},
    {title:'Exceptions', icon:'shield.svg', badges:['Core'], body:'try/catch to handle errors.', code:`try{ int x=Integer.parseInt("a"); }catch(Exception e){}`},
    {title:'Packages', icon:'book.svg', badges:['Core'], body:'Organize classes with packages.'},
    {title:'File I/O', icon:'book.svg', badges:['Core'], body:'Read/write files with java.io.', code:`Files.writeString(Path.of("note.txt"), "hi");`},
    {title:'Project: Guess Number', icon:'star.svg', badges:['Project'], body:'Console game with random number.'},
    {title:'Project: Todo Console', icon:'star.svg', badges:['Project'], body:'Manage a todo list with files.'}
  ],
  lua: [
    {title:'Welcome to Lua', icon:'lua.svg', badges:['Beginner'], body:'Lightweight language used in games.'},
    {title:'Variables & Types', icon:'puzzle.svg', badges:['Core'], body:'Dynamic types; nil means nothing.', code:`name="Maya" age=10`},
    {title:'If & Loops', icon:'loop.svg', badges:['Core'], body:'if/then/else/end; for loops.', code:`for i=1,3 do print(i) end`},
    {title:'Functions', icon:'gear.svg', badges:['Core'], body:'Use function/end.', code:`function add(a,b) return a+b end`},
    {title:'Tables', icon:'grid.svg', badges:['Core'], body:'Lua tables are arrays + maps.', code:`pets={'cat','dog'} info={name='Maya', age=10}`},
    {title:'Metatables (concept)', icon:'gear.svg', badges:['Core'], body:'Change behavior of tables.'},
    {title:'Project: Tiny Adventure', icon:'star.svg', badges:['Project'], body:'Text game with choices.'}
  ],
  csharp: [
    {title:'Welcome to C#', icon:'csharp.svg', badges:['Beginner'], body:'Modern, object‑oriented language for .NET and Unity.'},
    {title:'Hello World', icon:'book.svg', badges:['Core'], body:'Entry point is Main.', code:`using System; class App{ static void Main(){ Console.WriteLine("Hi"); } }`},
    {title:'Variables & Types', icon:'puzzle.svg', badges:['Core'], body:'int, double, bool, string.', code:`int age=10; string name="Maya";`},
    {title:'If & Loops', icon:'loop.svg', badges:['Core'], body:'if/else, for, while.', code:`for(int i=0;i<3;i++){ Console.WriteLine(i); }`},
    {title:'Methods', icon:'gear.svg', badges:['Core'], body:'Static and instance methods.', code:`static int Add(int a,int b){ return a+b; }`},
    {title:'Classes & Objects', icon:'gear.svg', badges:['Core'], body:'Define classes with fields and methods.'},
    {title:'Collections', icon:'grid.svg', badges:['Core'], body:'Lists and dictionaries.', code:`var list=new List<int>{1,2,3}; var map=new Dictionary<string,int>();`},
    {title:'Exceptions', icon:'shield.svg', badges:['Core'], body:'try/catch/finally.'},
    {title:'Project: Calculator', icon:'star.svg', badges:['Project'], body:'Console calculator (+ − × ÷).'}
  ],
  cpp: [
    {title:'Welcome to C++', icon:'cpp.svg', badges:['Beginner'], body:'Fast, compiled language with manual control.'},
    {title:'Hello World', icon:'book.svg', badges:['Core'], body:'#include to use libraries; main() returns int.', code:`#include <iostream>\nusing namespace std;\nint main(){ cout << "Hi"; return 0; }`},
    {title:'Variables & Types', icon:'puzzle.svg', badges:['Core'], body:'int, double, bool, string (needs <string>).', code:`int age=10; double pi=3.14;`},
    {title:'If & Loops', icon:'loop.svg', badges:['Core'], body:'if/else; for/while.', code:`for(int i=0;i<3;i++){ cout<<i<<"\n"; }`},
    {title:'Functions', icon:'gear.svg', badges:['Core'], body:'Declare before use or provide prototypes.', code:`int add(int a,int b){ return a+b; }`},
    {title:'Vectors & Strings', icon:'grid.svg', badges:['Core'], body:'Use <vector> for dynamic arrays.', code:`vector<int> v={1,2,3};`},
    {title:'I/O Streams', icon:'book.svg', badges:['Core'], body:'cin/cout and file streams.', code:`ofstream f("note.txt"); f<<"hello";`},
    {title:'Project: Guess Game', icon:'star.svg', badges:['Project'], body:'Number guessing game (console).'}
  ]
};

// ===== App Logic =====
const subjectsEl = document.getElementById('subjects');
const tocEl = document.getElementById('toc');
const lessonEl = document.getElementById('lesson');
const subjectHeader = document.getElementById('subjectHeader');
const subjectIcon = document.getElementById('subjectIcon');
const subjectTitle = document.getElementById('subjectTitle');
const subjectDesc = document.getElementById('subjectDesc');
const searchBox = document.getElementById('searchBox');
const clearBtn = document.getElementById('clearSearch');
const progressCount = document.getElementById('progressCount');
const progressTotal = document.getElementById('progressTotal');

const PROG_KEY = 'kids-code-progress-v2';
let progress = JSON.parse(localStorage.getItem(PROG_KEY) || '{}');

function totalLessons(){
  let t=0; for(const k in courseContent){ t += courseContent[k].length } return t;
}

function updateProgress(){
  const count = Object.values(progress).reduce((a,b)=> a + Object.keys(b||{}).length, 0);
  progressCount.textContent = count;
  progressTotal.textContent = totalLessons();
  localStorage.setItem(PROG_KEY, JSON.stringify(progress));
}

function subjectButton(s){
  const btn = document.createElement('button');
  btn.className = 'subject-btn';
  btn.innerHTML = `<img src="${s.icon}" alt="${s.name} icon"/><div><strong>${s.name}</strong><div class="mini muted">${s.desc}</div></div>`;
  btn.onclick = () => showTOC(s.id);
  return btn;
}

function showSubjects(){
  subjectsEl.innerHTML = '';
  const title = document.createElement('h3');
  title.style.margin = '1rem .75rem .25rem';
  title.textContent = 'Books';
  subjectsEl.appendChild(title);
  subjects.forEach(s => subjectsEl.appendChild(subjectButton(s)));
}

function tocItem(subjectId, idx, lesson){
  const li = document.createElement('li');
  const done = !!(progress[subjectId] && progress[subjectId][idx]);
  li.innerHTML = `
    <div class="meta">${idx+1}. ${lesson.badges?.join(' • ') || ''}</div>
    <h4>${lesson.title} ${done ? '✅' : ''}</h4>
    <div class="mini muted">${(lesson.body||'').split('\n')[0]}</div>`;
  li.onclick = () => showLesson(subjectId, idx);
  return li;
}

function showTOC(subjectId){
  const subj = subjects.find(s=>s.id===subjectId);
  if(!subj) return;
  subjectHeader.hidden = false;
  subjectIcon.src = subj.icon; subjectIcon.width=44; subjectIcon.height=44;
  subjectIcon.alt = subj.name + ' icon';
  subjectTitle.textContent = subj.name + ' — Full Course';
  subjectDesc.textContent = subj.desc;
  lessonEl.hidden = true; lessonEl.innerHTML = '';
  tocEl.innerHTML = '';
  courseContent[subjectId].forEach((les, i)=> tocEl.appendChild(tocItem(subjectId, i, les)));
  tocEl.scrollIntoView({behavior:'smooth', block:'start'});
}

function showLesson(subjectId, idx){
  const les = courseContent[subjectId][idx];
  if(!les) return;
  lessonEl.hidden = false;
  const iconPath = 'assets/illustrations/' + (les.icon || 'book.svg');
  lessonEl.innerHTML = `
    <header>
      <img src="${iconPath}" alt="icon"/>
      <div>
        <h2>${les.title}</h2>
        <div class="badges">${(les.badges||[]).map(b=>`<span class="badge">${b}</span>`).join('')}</div>
      </div>
    </header>
    <div class="note">${les.body||''}</div>
    ${les.code? `<pre><code>${esc(les.code)}</code></pre>`:''}
    <div class="actions">
      <button id="markDone">Mark as Done ✓</button>
      <button class="secondary" id="prevBtn">◀ Prev</button>
      <button class="secondary" id="nextBtn">Next ▶</button>
      ${les.code? '<button class="ghost" id="copyBtn">Copy Code</button>':''}
      <button class="ghost" id="backBtn">Back to Course</button>
    </div>
  `;
  document.getElementById('backBtn').onclick = () => showTOC(subjectId);
  document.getElementById('markDone').onclick = () => { progress[subjectId] = progress[subjectId] || {}; progress[subjectId][idx] = true; updateProgress(); showTOC(subjectId); };
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  prev.onclick = () => { if(idx>0) showLesson(subjectId, idx-1); };
  next.onclick = () => { if(idx < courseContent[subjectId].length-1) showLesson(subjectId, idx+1); };
  const copy = document.getElementById('copyBtn');
  if(copy){ copy.onclick = async ()=>{
    const code = lessonEl.querySelector('pre code').innerText; await navigator.clipboard.writeText(code); copy.textContent='Copied!'; setTimeout(()=>copy.textContent='Copy Code',1000);
  }}
  lessonEl.scrollIntoView({behavior:'smooth', block:'start'});
}

function filterLessons(q){
  const query = q.trim().toLowerCase();
  if(!query){ tocEl.innerHTML=''; lessonEl.hidden=true; subjectHeader.hidden=true; return; }
  subjectHeader.hidden = false; subjectIcon.src = 'assets/illustrations/book.svg'; subjectTitle.textContent = 'Search Results'; subjectDesc.textContent = 'Lessons that match: ' + q;
  tocEl.innerHTML = '';
  const matches=[];
  for(const [sid, list] of Object.entries(courseContent)){
    const subjectName = subjects.find(s=>s.id===sid)?.name || sid;
    list.forEach((les,i)=>{
      const hay = `${subjectName} ${les.title} ${(les.body||'')}`.toLowerCase();
      if(hay.includes(query)) matches.push({sid,i,les});
    })
  }
  if(matches.length===0){ tocEl.innerHTML='<li>No matches.</li>'; return; }
  matches.forEach(m=> tocEl.appendChild(tocItem(m.sid, m.i, m.les)));
}

// Controls
searchBox.addEventListener('input', e=> filterLessons(e.target.value));
document.getElementById('clearSearch').onclick = ()=>{ searchBox.value=''; filterLessons(''); };

document.getElementById('toggleMotion').onclick = ()=>{
  const bg = document.querySelector('.bg-shapes');
  bg.style.display = getComputedStyle(bg).display==='none' ? '' : 'none';
};
document.getElementById('printLesson').onclick = ()=> window.print();
document.getElementById('resetProgress').onclick = ()=>{
  if(confirm('Reset all progress?')){ progress={}; updateProgress(); alert('Progress cleared.'); }
};

document.getElementById('exportProgress').onclick = ()=>{
  const blob = new Blob([JSON.stringify(progress,null,2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download='kids-code-progress.json'; a.click();
};
document.getElementById('importProgress').addEventListener('change', (e)=>{
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{ try{ progress = JSON.parse(reader.result); updateProgress(); alert('Progress imported!'); } catch{ alert('Invalid file.'); } };
  reader.readAsText(file);
});
courseContent.html.push({
  title: 'Forms Advanced',
  icon: 'form.svg',
  badges: ['Core'],
  body: 'Validation, patterns, and input types like email, url, number.',
  code: `<input type=\"email\" required placeholder=\"you@example.com\">`
});


// Init
showSubjects();
updateProgress();
