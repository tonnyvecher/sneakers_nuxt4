<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__p">Каталог</p>
      <a class="footer__link" href="#">Все бренды</a>
      <a class="footer__link" href="#">Nike</a>
      <a class="footer__link" href="#">Adidas</a>
      <a class="footer__link" href="#">New Balance</a>
    </div>
    <div class="footer__inner">
      <p class="footer__p">Помощь</p>
      <a class="footer__link" href="#">Доставка</a>
      <a class="footer__link" href="#">Заказ и оплата</a>
      <a class="footer__link" href="#">Обман и возврат</a>
      <a class="footer__link" href="#">F. A. Q.</a>
    </div>
    <div class="footer__inner">
      <p class="footer__p">Информация</p>
      <a class="footer__link" href="#">Преимущества</a>
      <a class="footer__link" href="#">Гарантия и безопасность</a>
      <a class="footer__link" href="#">Акции</a>
      <a class="footer__link" href="#">Индивидуальный заказ</a>
    </div>
    <div class="footer__inner">
      <p class="footer__p">Компания</p>
      <a class="footer__link" href="#">О нас</a>
      <a class="footer__link" href="#">Блог</a>
      <a class="footer__link" href="#">Отзывы</a>
      <a class="footer__link" href="#">Контакты</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    gap: 14px;
    flex-wrap: wrap;
  }

  &__p,
  &__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
  }

  &__p {
    color: rgba(111, 111, 111, 1);
  }

  &__link {
    color: rgba(255, 255, 255, 1);
  }
}
</style>
