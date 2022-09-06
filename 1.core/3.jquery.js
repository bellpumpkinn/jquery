$('#myId') // <div id='myId'></div>

// 과제: class myClass DOM들을 찾아라.
$('.myClass')

// 과제: name attribute value 가 surname인 input DOM 들을 찾아라.
$('input[name="surname"]') // <input name = 'surname'/>

$('#contents ul.people li')
// 위 selector 에 해당하는 HTML code 를 작성하라.
/*
<div id = 'contents'>
    <ul class='people'> 
        <li></li>
        <li></li>
    </ul>
</div>

컬렉션 : 집합(원소가 n개가 있다.)
*/

// "external" 클래스를 가지는 a 요소중 첫번째 요소를 선택합니다.
$('a.external:first')
/*
<a class='external'></a>   first라서 첫번째만 선택한다.
<a class='external'></a>
*/
//마지막꺼 선택하고싶으면 last


$('tr:odd') // index는 0 부터 시작한다.
/*
<ul>
    <li></li>
    <li></li> -- 얘랑
    <li></li>
    <li></li> -- 얘가 선택된다.
</ul>
*/

$('div:visible') // 객체에 대해서 특별히 언급안했으면 visible. 보이는것만 선택하겠다일때.

$('div:gt(1)') // 1을 초과하는 인덱스를 선택하라.
/*
<div></div>
<div></div>
<div></div> --  1보다 크다니까 얘가 선택된다.
*/

// 모든 현재 애니메이션되는 div들을 선택합니다.
$('div:animated')

$('a[rel$="thinger"]')
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p') // p를 갖고있는것들만 골라내겠다.
/*
<div class='foo>
    <p></p>
</div>          -----> 얘만 리턴한다.

<div class='foo>
</div>
*/

$('ul li').filter('.current')
/*
<ul>
    <li class='current'></li>  -- 얘가 최종적으로 리턴.
    <li></li>  -- 얘는 76번줄 not을 쓴거가 호출함.
</ul>
*/

// has 다음은 자식 filter다음은 또다른 셀렉터

$('ul li').not('.current')

$('ul li').eq(1) // 1번 index만 찾아내고싶다 그럴때 사용
//eq가 리턴하는건 컬렉션

// 과제: class foo인 div element가 있으면 {}을 실행하라. 는 코드를 작성해라.

if($('div.foo')) {}

$('form :button')
/*
    <form>
    <button></button>
    <input type='button'>
    </form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form : checked')
/*
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form : selected')
/*
<select><option></option></select>
*/

$('form : enabled')
$('form: disabled')

$('form: file') // <input type='file'/>

$('form: input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button> // 버튼타입은 button reset submit
*/    

$('form :text') //<input type='text'/>

$('form :password') //<input type='password'/>

$('form: input[name="gender"]:radio')
//띄어쓰기는 자식을 뜻한다. 붙인거는 자식이 아니다를 말한것.

//$('form: input[name="gender"]:radio') 해당 HTML코드를 써라.
/*
<form>
<input type='radio' name='gender'/>
</form>
*/

$('form: reset') // <input type='reset'/>

$('form: submit') // <input type='submit'/>

