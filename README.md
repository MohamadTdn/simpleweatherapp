# Simple Weather App with HTML CSS JS and Open Weather API

## Made By Mohamad Tadayon

---

<P>this is a simple weather app for js and you can learn api working in this project</p>

## a view of project api fetch datas

```javascript
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=70ab4a111d0b7775c63ce389ad6764ed')
        .then(res => {
            return res.json();
        }) 
        .then(data => {
            cityData.style.cssText = 'display: block';
            city.innerHTML = data.name;
            country.innerHTML = data.sys.country;

```
---

## Technologies in this project :

1. Html
2. Css
3. JavaScript
4. API

---
## Project Links

[sabzlearn git course](https://sabzlearn.ir/course/git-github/#lessons)

[sabzlearn react course](https://sabzlearn.ir/course/reactjs/#lessons)

---

# project ui preview

