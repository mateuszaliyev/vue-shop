<template>
  <footer class="footer light" id="footer">
    <div class="column">
      <h4 class="heading">Contact</h4>
      <p class="paragraph">Questions? Go ahead.</p>
      <form class="form" @submit.prevent="handleSubmit">
        <v-input
          autocomplete="name"
          class="input"
          name="name"
          placeholder="Name"
          required
          v-model="name"
        />
        <v-input
          autocomplete="email"
          class="input"
          name="email"
          placeholder="Email"
          required
          type="email"
          v-model="email"
        />
        <v-input
          autocomplete=""
          class="input"
          placeholder="Subject"
          required
          v-model="subject"
        />
        <v-input
          class="input"
          placeholder="Message"
          required
          v-model="message"
        />
        <v-button>Send</v-button>
      </form>
    </div>
    <div class="column">
      <h4 class="heading">About</h4>
      <ul class="links">
        <li class="item">
          <a class="link" href="#">About us</a>
        </li>
        <li class="item">
          <a class="link" href="#">We're hiring</a>
        </li>
        <li class="item"><a class="link" href="#">Support</a></li>
        <li class="item"><a class="link" href="#">Find store</a></li>
        <li class="item">
          <a class="link" href="#">Shipment</a>
        </li>
        <li class="item"><a class="link" href="#">Payment</a></li>
        <li class="item">
          <a class="link" href="#">Gift card</a>
        </li>
        <li class="item"><a class="link" href="#">Return</a></li>
        <li class="item"><a class="link" href="#">Help</a></li>
      </ul>
    </div>
    <div class="column column--left">
      <h4 class="heading">Store</h4>
      <p class="paragraph">
        <font-awesome-icon
          fixed-width
          icon="map-marker-alt"
        ></font-awesome-icon>
        Company Name
      </p>
      <p class="paragraph">
        <font-awesome-icon fixed-width icon="phone-alt"></font-awesome-icon>
        0044123123
      </p>
      <p class="paragraph">
        <font-awesome-icon fixed-width icon="envelope"></font-awesome-icon>
        ex@mail.com
      </p>
      <h4 class="heading">We accept</h4>
      <p class="paragraph">
        <font-awesome-icon :icon="['fab', 'cc-amex']"></font-awesome-icon>
        Amex
      </p>
      <p class="paragraph">
        <font-awesome-icon icon="credit-card"></font-awesome-icon>
        Credit Card
      </p>
      <div class="social">
        <font-awesome-icon
          :icon="['fab', 'facebook-square']"
        ></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'snapchat']"></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'pinterest-p']"></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'linkedin-in']"></font-awesome-icon>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import VButton from "@/components/input/VButton.vue";
import VInput from "@/components/input/VInput.vue";

@Component({
  components: {
    VButton,
    VInput,
  },
})
export default class TheFooter extends Vue {
  protected email = "";
  protected message = "";
  protected name = "";
  protected subject = "";

  protected handleSubmit(): void {
    console.log(this.name, this.email, this.subject, this.message);
  }
}
</script>

<style lang="scss" scoped>
.column {
  text-align: center;
  width: calc(100% / 3);

  &--left {
    text-align: left;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.footer {
  display: flex;
  font-size: 1.2rem;
  gap: 1.6rem;
  padding: 6.4rem 1.6rem;
}

.heading {
  font-size: 2rem;
  font-weight: 400;
  margin: 1rem 0;
}

.item {
  margin: 1.2rem 0;
}

.links {
  list-style-type: none;
}

.input {
  width: 100%;
}

.paragraph {
  margin: 1.2rem 0;
}

.social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  font-size: 1.8rem;
  margin-top: 3rem;

  & > svg:hover {
    opacity: 0.6;
  }
}
</style>
