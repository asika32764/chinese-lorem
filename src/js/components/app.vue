<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-sm-10">
        <div class="my-4 d-flex align-items-center">
          <b-form-group label="語料">
            <b-form-radio-group
              id="radio-fixtures"
              v-model="fixture"
              :options="options"
              buttons
              button-variant="outline-primary"
            ></b-form-radio-group>
          </b-form-group>

          <div class="ml-auto">
            <button type="button" class="btn btn-primary"
              @click="reloadLorem">
              更新
            </button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="card-title d-flex justify-content-between">
              <h3 class="" ref="title">
                {{ title }}
              </h3>
              <div class="ml-2">
                <button type="button" class="btn btn-sm btn-outline-primary"
                  data-task="copy"
                  data-target="title">
                  複製標題
                </button>
              </div>

              <div class="ml-auto">
                <button type="button" class="btn btn-sm btn-outline-primary"
                  data-task="copy"
                  data-target="text">
                  複製全文
                </button>
              </div>
            </div>

            <div class="article-content" ref="text">
              {{ text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Clipboard from 'clipboard';
import uniqueRandomArray from 'unique-random-array';
import { BFormRadioGroup, BFormGroup } from 'bootstrap-vue';

export default {
  name: 'app',
  components: {
    BFormGroup,
    'b-form-radio-group': BFormRadioGroup
  },
  data() {
    return {
      fixture: 'iching',
      fixtures: [],
      options: [
        { text: '易經', value: 'iching' },
        { text: '三字經', value: 'san_zi_jing' },
      ],
      title: '',
      text: ''
    };
  },
  mounted() {
    this.loadLorem().then(() => {
      this.reloadLorem();
    });

    new Clipboard('[data-task=copy]', {
      text: (trigger) => {
        const field = trigger.dataset.target;
        return this[field];
      }
    });
  },
  methods: {
    reloadLorem() {
      this.title = this.randomText(2);
      this.text = this.randomText(100);
    },

    loadLorem() {
      return $.ajax(`./fixtures/${this.fixture}.json`)
        .done((res) => {
          this.fixtures = typeof res === 'string' ? JSON.parse(res) : res;
        });
    },

    randomText(num = 3) {
      const random = uniqueRandomArray(this.fixtures);
      const t = [];

      for (let i = 0; i < num; i++) {
        t.push(random());
      }

      return t.join('，');
    },

    copy(e, field) {
      const clip = new Clipboard(e.target);
      clip
    }
  },
  watch: {
    fixture(v) {
      this.loadLorem().then(() => {
        this.reloadLorem();
      });
    }
  }
};
</script>

<style scoped>

</style>
