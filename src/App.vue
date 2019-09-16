<template>
  <div id="app">
    <div id="table">
      <div id="upperRows">
        <div
          id="zero"
          @click="addOther('zero')"
        >
          <div>

            <div> 0
            </div>
            
              <div class="winnable">
                <div class="winnableNumber" sty>
                  {{otherTypes.zero.winnable}}
                </div>
              </div>
            <div class="number_bet">

              <bet :times="otherTypes.zero.coins"></bet>
            </div>
          </div>
        </div>
        <div id="rows">
          <div
            v-for="(col,i) in cols"
            :key="i"
            class="col"
          >
            <div
              v-for="(number,j) in col"
              :key="j"
              :style="styleForNumber(number)"
              class="number"
            >
              <div>{{number.number}}</div>
              <div class="winnable">
                <div class="winnableNumber">
                  {{number.winnable}}
                </div>
              </div>
              <div class="number_top">
                <div
                  class="number_full number_bet"
                  @click="addCoin(number,'full', $event)"
                >
                  <bet :times="number.bets.full"></bet>

                </div>

                <div
                  class="number_half number_bet"
                  @click="addCoin(number,'half', $event)"
                >
                  <bet :times="number.bets.half"></bet>
                </div>

                <div
                  class="number_fourth number_bet"
                  v-if="j<2"
                  @click="addCoin(number,'fourth', $event)"
                >
                  <bet :times="number.bets.fourth"></bet>
                </div>
                <div
                  class="number_sixth number_bet"
                  v-if="j==0"
                  @click="addCoin(number,'sixth', $event)"
                >
                  <bet :times="number.bets.sixth"></bet>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="rowBets">
          <div
            @click="addOther('row3', $event)"
            class="rowField"
          >
            <div> 2 in 1
            </div>

            <div class="number_top">

              <div class="number_bet rowBet">

                <bet :times="otherTypes.row3.coins"></bet>
              </div>
            </div>
          </div>

          <div
            @click="addOther('row2', $event)"
            class="rowField"
          >
            <div> 2 in 1
            </div>

            <div class="number_top">

              <div class="number_bet rowBet">

                <bet :times="otherTypes.row2.coins"></bet>
              </div>
            </div>
          </div>

          <div
            @click="addOther('row1', $event)"
            class="rowField"
          >
            <div> 2 in 1
            </div>
            <div class="number_top">
              <div class="number_bet rowBet">

                <bet :times="otherTypes.row1.coins"></bet>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div class="lowerRows">
        <div
          @click="addOther('col1', $event)"
          class="colField"
        >
          <div> 1st 12
          </div>

          <div class="number_top">

            <div class="number_bet colBet">

              <bet :times="otherTypes.col1.coins"></bet>
            </div>
          </div>
        </div>

        <div
          @click="addOther('col2', $event)"
          class="colField"
        >
          <div> 2nd 12
          </div>

          <div class="number_top">

            <div class="number_bet colBet">

              <bet :times="otherTypes.col2.coins"></bet>
            </div>
          </div>
        </div>

        <div
          @click="addOther('col3', $event)"
          class="colField"
        >
          <div> 3rd 12th
          </div>
          <div class="number_top">
            <div class="number_bet colBet">

              <bet :times="otherTypes.col3.coins"></bet>
            </div>
          </div>
        </div>

        <div style="flex: 10vw 0 0">
        </div>
      </div>

      <div
        class="lowerRows"
        style="height: 5vw"
      >
        <div
          @click="addOther('lower', $event)"
          class="otherField"
        >
          <div>lower

          </div>
          <div class="number_top">
            <div class="number_bet otherBet">

              <bet :times="otherTypes.lower.coins"></bet>
            </div>
          </div>
        </div>

        <div
          @click="addOther('odd', $event)"
          class="otherField"
        >
          <div>odd
          </div>
          <div class="number_top">
            <div class="number_bet otherBet">

              <bet :times="otherTypes.odd.coins"></bet>
            </div>
          </div>
        </div>

        <div
          @click="addOther('black', $event)"
          class="otherField"
        >
          <div>black

          </div>
          <div class="number_top">
            <div class="number_bet otherBet">

              <bet :times="otherTypes.black.coins"></bet>
            </div>
          </div>
        </div>

        <div
          @click="addOther('red', $event)"
          class="otherField"
        >
          <div>red
          </div>
          <div class="number_top">
            <div class="number_bet otherBet">

              <bet :times="otherTypes.red.coins"></bet>
            </div>
          </div>
        </div>

        <div
          @click="addOther('even', $event)"
          class="otherField"
        >
          <div>even
          </div>
          <div class="number_top">
            <div class="number_bet otherBet">

              <bet :times="otherTypes.even.coins"></bet>
            </div>
          </div>
        </div>
        <div
          @click="addOther('upper', $event)"
          class="otherField"
        >
          <div>upper
          </div>
          <div class="number_top">
            <div class="number_bet otherBet">

              <bet :times="otherTypes.upper.coins"></bet>
            </div>
          </div>
        </div>

        <div style="flex: 10vw 0 0">
        </div>
      </div>
    </div>
    <div id="results">

      <div>
        <h2>
          Info:
        </h2>
        <div> Credits: {{credits}}</div>
        <h2> Actions:
        </h2>
        <div>Simulate <input
            type="number"
            v-model="simulations"
          > Games <button @click="simulateN">Go!</button>
        </div>
      </div>
      Profit: {{result.profit}}<br>

      Profit (%): {{result.profit_perc}}%<br>
      <button @click="result.show=!result.show">
        <template v-if="result.show">Hide</template>
        <template v-else>Show</template> Details
      </button>
      <div v-if="result.show">
        <table>
          <tr>
            <th>Before</th>
            <th>Profit</th>
            <th>Won</th>
            <th>After</th>
            <th>Number</th>
          </tr>
          <tr
            v-for="(h,i) in result.history"
            :key="i"
          >
            <td>{{h.before}}</td>
            <td>{{h.profit}}</td>
            <td>{{h.won}}</td>
            <td>{{h.after}}</td>
            <td>{{h.number}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Bet from "./components/Bet.vue";
export default {
  name: "app",
  components: {
    bet: Bet
  },
  data() {
    return {
      numbers: [],
      cols: [],
      bets: [],
      credits: 5,
      otherTypes: {},
      simulations: 1000,
      result: {
        history: [],
        end: 0,
        profit: 0,
        profit_perc: 0,
        done: false,
        show: false
      }
    };
  },
  methods: {
    addOther(typeName, event) {
      let type = this.otherTypes[typeName];
      let betType = `other-${typeName}`;
      if (event && (event.ctrlKey || event.altKey) && type.coins > 0) {
        this.credits++;
        type.coins--;
        let betIndex = this.bets.findIndex(bet => bet.betType == betType);
        this.bets.splice(betIndex, 1);
      } else {
        this.credits--;
        type.coins++;
        this.bets.push({ ...type, betType });
      }
      this.calculateWinnable();
    },
    addCoin(number, type, event) {
      let numbers = [number.number];
      let betType = `number-${number.number}-${type}`;
      if (event && (event.ctrlKey || event.altKey) && number.bets[type] > 0) {
        this.credits++;
        number.bets[type]--;
        let betIndex = this.bets.findIndex(bet => bet.betType == betType);
        this.bets.splice(betIndex, 1);
      } else {
        this.credits--;
        number.bets[type]++;
        let payout = 0;
        switch (type) {
          case "full":
            payout = 36;
            break;

          case "half":
            numbers.push(Math.max(0, number.number - 3));
            payout = 18;
            break;
          case "fourth":
            numbers.push(
              Math.max(0, number.number - 3),
              Math.max(0, number.number - 2),
              Math.max(0, number.number + 1)
            );
            payout = 9;
            break;

          case "sixth":
            for (let n = 0; n < 6; n++) {
              numbers.push(Math.max(0, number.number + n - 3));
            }
            payout = 6;
            break;
        }

        this.bets.push({
          numbers,
          payout,
          betType
        });
      }
      this.calculateWinnable();
    },
    styleForNumber(number) {
      return {
        "background-color": number.color,
        color: "white"
      };
    },
    initializeOthers() {
      let others = [
        "zero",
        "col1",
        "col2",
        "col3",
        "row1",
        "row2",
        "row3",
        "upper",
        "lower",
        "red",
        "black",
        "even",
        "odd"
      ];
      others.forEach(other => {
        let otherType = {
          numbers: [],
          coins: 0,
          payout: 0
        };
        var starter12 = 1;
        var starte2in1 = 1;
        switch (other) {
          case "zero":
            otherType.numbers = [0];
            otherType.payout = 36;
            otherType.winnable = 0;
            break;

          case "col3":
            starter12 += 12;
          case "col2":
            starter12 += 12;
          case "col1":
            for (var i = starter12; i < starter12 + 12; i++)
              otherType.numbers.push(i);
            otherType.payout = 3;
            break;

          case "row3":
            starte2in1 += 1;
          case "row2":
            starte2in1 += 1;
          case "row1":
            console.log(starte2in1);
            for (var i = starte2in1; i <= 36; i += 3) otherType.numbers.push(i);
            otherType.payout = 3;
            break;
          case "lower":
            for (var i = 1; i <= 18; i++) otherType.numbers.push(i);
            otherType.payout = 2;
            break;

          case "upper":
            for (var i = 19; i <= 36; i++) otherType.numbers.push(i);
            otherType.payout = 2;
            break;
          case "odd":
            for (var i = 1; i <= 36; i += 2) otherType.numbers.push(i);
            otherType.payout = 2;
            break;

          case "even":
            for (var i = 2; i <= 36; i += 2) otherType.numbers.push(i);
            otherType.payout = 2;
            break;

          case "black":
          case "red":
            otherType.numbers.push(
              ...this.numbers
                .filter(number => number.color == other)
                .map(number => number.number)
            );
            otherType.payout = 2;
            break;
        }
        this.$set(this.otherTypes, other, otherType);
      });
    },
    calculateWinnable() {
      this.numbers.forEach(number => {
        number.winnable = this.winnableN(number.number);
      });
      this.otherTypes.zero.winnable = this.winnableN(0);
    },
    initializeNumbers() {
      const flippers = [10, 18, 28];
      let color = "red";
      for (var i = 1; i <= 36; i++) {
        let number = {
          number: i,
          color,
          bets: {
            full: 0,
            half: 0,
            fourth: 0,
            sixth: 0
          },
          winnable: 0
        };
        let switchColor = !flippers.includes(i);
        color = switchColor ? (color == "red" ? "black" : "red") : color;
        this.numbers.push(number);
        let col = Math.floor((i - 1) / 3);
        if (!this.cols[col]) this.$set(this.cols, col, []);

        this.cols[col].push(number);
      }
    },
    winnableN(number) {
      let won = 0;
      this.bets.forEach(bet => {
        if (bet.numbers.includes(number)) won += bet.payout;
      });
      return won;
    },
    simulateN() {
      this.result.done = false;
      let bettedCoins = this.bets.length;
      let simCredits = (this.credits += bettedCoins);
      for (let n = 0; n < this.simulations; n++) {
        let result = {
          before: simCredits
        };
        let number = Math.floor(Math.random() * 37);
        let won = this.winnableN(number);
        let profit = won - bettedCoins;
        simCredits += profit;
        result.after = simCredits;
        result.profit = profit;
        result.won = won;
        result.number = number;

        this.result.history.push(result);
      }
      this.result.profit = simCredits - this.credits;
      this.result.profit_perc = (simCredits / this.credits - 1) * 100;
      this.credits = simCredits;
      this.result.done = true;
    }
  },
  created() {
    this.initializeNumbers();
    this.initializeOthers();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#table {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}
#zero {
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 7vw 0 0;
}
.fields {
  background-color: green;
}
#upperRows {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-end;
  background-color: green;
}
.lowerRows {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-end;
  height: 10vw;
  background-color: green;
}
.colField,
.otherField,
.rowField,
#zero {
  margin: 1vw;
  border-radius: 4px;
  border: 1px solid whitesmoke;
}
.colField {
  flex: 18vw 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.otherField {
  flex: 8vw 0 0;
}
.otherBet {
  top: 0.5vw;
  left: 3.75vw;
}
.colBet {
  top: 2vw;
  left: -0.25vw;
}
#rowBets {
  flex: 10vw 0 0;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
.rowField {
  flex: 3vw 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#rows {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.col {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: center;
}
.number {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 5vw 0 0;
  width: 5vw;
}
.number_top {
  position: absolute;
  z-index: 5;
}

.winnable {
  position: absolute;
  z-index: 4;
  color: darkgrey;
}
.winnableNumber {
  position: relative;
  top: -1.5vw;
}
.number_full {
  top: -1.25vw;
  left: -1.25vw;
}
.number_half {
  top: -1.25vw;
  left: -3.75vw;
}
.number_fourth {
  top: -3.75vw;
  left: -3.75vw;
}

.number_sixth {
  top: 1.25vw;
  left: -3.75vw;
}
.number_bet {
  position: absolute;
  width: 2.5vw;
  height: 2.5vw;
}
.number_bet:hover {
  border: wheat 1px solid;
}
</style>
