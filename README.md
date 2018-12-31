# tmd-template-engine
The Most Dumbest Template Engine

# Usage:
```
let el = new TElement('div',
    {"class": "class-name"},
    'Some text',
    ['div', {"class": "another-class"}, 'inner',
      ['br']
    ]
);
document.querySelector('div#playground').appendChild(el.render());
```
gives us following html output
```
<div class="class-name">
  Some text
  <div class="another-class">
    inner
    <br>
  </div>
</div>
```

It's really that simple and lightning fast (I hope).
