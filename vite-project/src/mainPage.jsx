
function MainPage() {

  return (
      <>
      <div >
        
        <hr />
        <h1>Це - твоя історія</h1> 
        <p>Історія про те, як з одним бегом сходити на прогулянку, роботу, закупи чи зганяти в спонтанний тріп</p>
        <hr />
        
        <h2>Shift</h2>
        <h3>2689$</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <button>Придбати</button>
        <button>Фільтр</button>
        
        <hr />
        <h4>Чому саме ми?</h4>
        <hr />

        <div>
          <img src="" alt="" />
          <h3>На вечірку</h3>
          <p>Те відчуття, коли можна ніч танцювати і рюкзак не заважає</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>В музей</h3>
          <p>На випадок, якщо твій внутрішній естет забажає прикупити картину</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>За продуктами</h3>
          <p>Доки інші викликають таксі з магазину, всі твої закупи вміщаються за спиною</p>
        </div><div>
          <img src="" alt="" />
          <h3>На пікнік</h3>
          <p>Залиш корзинки для пікніку кіношним шаблонам та кидай все в рюкзак</p>
        </div>

        <hr />
        <h4>Каталог</h4>
        <hr />

        <div>
          <img src="" alt="" />
          <h2>Caps</h2>
          <h3>2689$</h3>
          <h3>2689$  ---</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button>Придбати</button>
          <button>Фільтр</button>
        </div>

        <div>
          <img src="" alt="" />
          <h2>Shift</h2>
          <h3>2689$</h3>
          <h3>2689$  ---</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button>Придбати</button>
          <button>Фільтр</button>
        </div>

        <div>
          <img src="" alt="" />
          <h2>Tab</h2>
          <h3>2689$</h3>
          <h3>2689$  ---</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button>Придбати</button>
          <button>Фільтр</button>
        </div>


        <hr />
        <h4>Кастомізація</h4>
        <hr />

        <div>
          <img src="" alt="" />
          <ol>
            <li>Shift</li>
            <li>Caps</li>
            <li>Tab</li>
          </ol>
        </div>
        <div>
          <h2>Чудовий вибір!</h2>
          
          <p>Модель</p>
          <select size="3" multiple name="model[]">
            <option defaultValue="Shift">Shift</option>
            <option value="Caps">Caps</option>
            <option value="Tab">Tab</option>
          </select>

          <p>Основний колір</p>
          <select size="3" multiple name="model[]">
            <option defaultValue="blue">blue</option>
            <option value="black">black</option>
            <option value="red">red</option>
          </select>

          <p>Ініціали</p>
          <input type="text" name="initials" id="initials" />

          <h3>3459$</h3>
          <button>Придбати</button>
        </div>


        <hr />
        <h4>Більше про нас</h4>
        <hr />

        <hr />
        <h2>Рейв - Сільпо - Виставка - Пікнік</h2> 
        <p>І все це за одну ніч та один день з одним рюкзаком. Ми дослідники міського простору, натисни ENTR і вперед...</p>
        <hr />
        <button>БІЛЬШЕ ПРО НАС</button>
        <img src="" alt="" />

        <hr />

        <img src="" alt="" />
        <h2>Гарантія</h2>
        <p>На кожен рюкзак з нашого асортименту поширюється гарантія терміном на один місяць з моменту покупки</p>
        <p>Ми віримо у те, що робимо і саме тому нам нема чого приховувати</p>
        <button>ДЕТАЛЬНІШЕ</button>


        <hr />
          <button>Instagram</button>
          <button>Facebook</button>
        <hr />


        <h3>ENTR!</h3>

        <a href="#">ЧОМУ МИ</a>
        <a href="#">КАТАЛОГ</a>
        <a href="#">ЗРОБИ САМ</a>
        <a href="#">ПРО НАС</a>
        <a href="#">ГАРАНТІЯ</a>
        <a href="#">БЛОГ</a>

        <span>inst</span>
        <span>facebook</span>
 
        <input type="text" name="mail" id="mail" />



      </div>
      </>
  )
}

export {MainPage}
