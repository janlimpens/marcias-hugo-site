---
title: Contato
date: 2018-04-22T18:55:46-03:00
author: admin
draft: false
---

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>seu nome:<br/> <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>seu endereço de mail:<br/> <input type="email" name="email" /></label>
  </p>
  <p>
    <label>mensagem:<br/> <textarea name="message" style="width: 100%; height: 100px"></textarea></label>
  </p>
  <p>
    <input type="hidden" name="form-name" value="contact">
    <button type="submit">Send</button>
  </p>
</form>
