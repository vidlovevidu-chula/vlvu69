<script lang="ts">
  import LayersWithDelay from "./LayersWithDelay.svelte";
  import Layer from "./Layer.svelte";
  import TapNext from "./TapNext.svelte";
  import FadeIn from "./FadeIn.svelte";
  import GameProvider from "./GameProvider.svelte";
  import Scene from "./Scene.svelte";
  import TouchArea from "./TouchArea.svelte";
</script>

<GameProvider
  gameOptions={{
    isDebugTouchAreaVisible: false,
    currentSceneIndex: -1,
    playerName: "",
    mbtiScores: {
      I: 0,
      E: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    },
  }}
>
  {#snippet children(game)}
    <div class="h-screen bg-pink-50">
      <main
        class="relative py-2 overflow-hidden h-full max-w-md rounded-2xl mx-auto"
      >
        <Scene id={-1}>
          <FadeIn class="h-full">
            <div class="-z-10">
              <img
                src="/01 Main Page/layer/locker.PNG"
                class="absolute z-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                alt=""
              />
              <img
                src="/01 Main Page/layer/id card.PNG"
                class="absolute z-10 h-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                alt=""
              />
            </div>
            <div class="">
              <input
                bind:value={game.playerName}
                type="text"
                placeholder="ชื่อของคุณ"
                class="text-2xl absolute w-4/7 z-20 left-1/2 top-[40%] -translate-x-1/2 text-center active:outline-none focus:outline-none rounded-lg"
              />
              <button
                onclick={() => game.nextScene()}
                class="text-2xl cursor-pointer absolute w-3/4 h-14 z-20 left-1/2 top-[85.5%] -translate-x-1/2 text-center active:outline-none focus:outline-none rounded-lg"
              >
                &nbsp;
                <span class="sr-only"> เริ่มทำแบบทดสอบ </span>
              </button>
            </div>
          </FadeIn>
        </Scene>
        <Scene id={0}>
          <FadeIn>
            <Layer src="/03 Story scene 1/ฉาก gradient/bg.PNG" />
            <Layer src="/03 Story scene 1/ฉาก gradient/IMG_9396.PNG" />
            <Layer
              src="/03 Story scene 1/ฉาก gradient/text.PNG"
              class="transition-opacity delay-500 duration-1000"
            />
            <LayersWithDelay delay={2000}>
              <TapNext next="scene" />
            </LayersWithDelay>
            <Layer src="/03 Story scene 1/ฉาก gradient/bg.PNG" />
            <Layer src="/03 Story scene 1/ฉาก gradient/IMG_9396.PNG" />
            <Layer src="/03 Story scene 1/ฉาก gradient/text.PNG" />
            <TapNext next="scene" />
          </FadeIn>
        </Scene>
        <Scene id={1}>
          <FadeIn>
            <Layer src="/03 Story scene 1/ฉาก ปฏิทิน/calendar_element.PNG" />
            <LayersWithDelay delay={1000}>
              <Layer src="/03 Story scene 1/ฉาก ปฏิทิน/text/IMG_9396.PNG" />
              <Layer src="/03 Story scene 1/ฉาก ปฏิทิน/text/เช้าวันใหม่.PNG" />
              <LayersWithDelay delay={1000}>
                <TapNext next="scene" />
              </LayersWithDelay>
            </LayersWithDelay>
          </FadeIn>
        </Scene>

        <Scene id={2}>
          <FadeIn>
            <Layer src="/03 Story scene 1/ฉาก ปฏิทิน/calendar_element.PNG" />
            <LayersWithDelay delay={3000}>
              <Layer src="/03 Story scene 1/ฉาก ปฏิทิน/text/IMG_9396.PNG" />
              <Layer
                src="/03 Story scene 1/ฉาก ปฏิทิน/text/วันแห่งความรัก.PNG"
              />
              <LayersWithDelay delay={1000}>
                <TapNext next="scene" />
              </LayersWithDelay>
            </LayersWithDelay>
          </FadeIn>
        </Scene>

        <Scene id={3}>
          <FadeIn>
            <Layer src="/03 Story scene 1/ฉาก โต๊ะข้าว/01 โต๊ะข้าว.PNG" />
            <LayersWithDelay delay={2000}>
              <Layer src="/08 Story scene 2/IMG_9396.PNG" />
              <Layer src="/03 Story scene 1/ฉาก โต๊ะข้าว/เช้านี้มีไรกิน.PNG" />
              <LayersWithDelay delay={1000}>
                <TapNext next="scene" />
              </LayersWithDelay>
            </LayersWithDelay>
          </FadeIn>
        </Scene>

        <Scene id={4}
          ><FadeIn>
            <Layer src="/04 Q-1/bg/02 ซูมเข้าโต๊ะข้าว.PNG" />
            <LayersWithDelay delay={0}>
              <Layer src="/04 Q-1/text/text ฉากซูมเข้าโต๊ะข้าว.PNG" />
              <LayersWithDelay delay={0}>
                <Layer
                  src="/03 Story scene 1/ฉาก โต๊ะข้าว/จานข้าวแก้.PNG"
                  class="z-50"
                />
                <TouchArea
                  title="ขนมปัง"
                  top="35%"
                  rotate="45deg"
                  left="24%"
                  width="23%"
                  height="25%"
                  onclick={() => {
                    game.addScore({ T: +1 });
                    game.nextScene();
                  }}
                />
                <TouchArea
                  title="ไข่ดาว"
                  top="50%"
                  rotate="-45deg"
                  left="50%"
                  width="45%"
                  height="28%"
                  onclick={() => {
                    game.addScore({ T: +3 });
                    game.nextScene();
                  }}
                />
                <TouchArea
                  title="ไส้กรอก"
                  top="62%"
                  rotate="-45deg"
                  left="32%"
                  width="20%"
                  height="26%"
                  onclick={() => {
                    game.addScore({ F: +3 });
                    game.nextScene();
                  }}
                />
                <TouchArea
                  title="ไส้กรอก"
                  top="67%"
                  rotate="70deg"
                  left="55%"
                  width="16%"
                  height="26%"
                  onclick={() => {
                    game.addScore({ F: +3 });
                    game.nextScene();
                  }}
                />
                <TouchArea
                  title="สลัดผัก"
                  rotate="-34deg"
                  top="41%"
                  left="75%"
                  width="27%"
                  height="33%"
                  onclick={() => {
                    game.addScore({ F: +1 });
                    game.nextScene();
                  }}
                />
              </LayersWithDelay>
            </LayersWithDelay>
          </FadeIn>
        </Scene>

        <Scene id={5}>
          <FadeIn>
            <Layer src="/04 Q-1/bg/03 ในรถ.PNG" />
            <LayersWithDelay delay={1000}>
              <Layer src="/04 Q-1/text/IMG_9396.PNG" />
              <Layer src="/04 Q-1/text/ดีจัง แม่ไปส่ง.PNG" />
              <LayersWithDelay delay={1000}>
                <TapNext next="scene" />
              </LayersWithDelay>
            </LayersWithDelay>
          </FadeIn>
        </Scene>

        <Scene id={6}>
          <FadeIn>
            <Layer src="/05 Q-2/bg.PNG" />
            <LayersWithDelay delay={0}>
              <Layer src="/05 Q-2/text and choice.PNG" />
              <TouchArea
                title="ที่นั่ง A"
                top="55%"
                height="10%"
                width="40%"
                left="60%"
                onclick={() => game.addScore({ E: +3 }).nextScene()}
              />
              <TouchArea
                title="ที่นั่ง B"
                top="70%"
                height="13%"
                width="40%"
                left="20%"
                onclick={() => game.addScore({ E: +1 }).nextScene()}
              />
              <TouchArea
                title="ที่นั่ง C"
                top="87%"
                height="13%"
                width="35%"
                left="16%"
                onclick={() => game.addScore({ I: +3 }).nextScene()}
              />
              <TouchArea
                title="ที่นั่ง D"
                top="87%"
                height="13%"
                width="35%"
                left="85%"
                onclick={() => game.addScore({ I: +1 }).nextScene()}
              />
            </LayersWithDelay>
          </FadeIn>
        </Scene>
        <Scene id={7}>
          <!-- TODO -->
        </Scene>
      </main>
    </div>
    {#if import.meta.env.DEV}
      <pre>{JSON.stringify(
          {
            score: Object.fromEntries(game.mbtiScores.entries()),
            currentSceneIndex: game.currentSceneIndex,
            currentStepIndex: game.currentStepIndex,
            playerName: game.playerName,
          },
          null,
          2,
        )}</pre>
    {/if}
  {/snippet}
</GameProvider>
