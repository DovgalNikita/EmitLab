<script setup lang="ts">
    const bool = true
</script>

<template>
    <div class="reportBlock" >
        <div class="relation">
            <div class="circle"></div>
            <div class="line"></div>
        </div>
        <div class="contentBlock" :class="[{active:bool}]">
            <ProgressBarComp/>
            <div class="content">

                <div class="timeRow">
                    <div class="timeRange">13:00-13:40</div>
                    <div class="timeLeft"><div>осталось 16 мин</div></div>
                </div>

                <AuthorsBlock />

                <div class="themeTitle">
                    Достучаться до небес: как выстроить эффективное взаимодействие с «непростым» заказчиком
                </div>

                <div class="footerAnnotation">
                    <div>секц.доклад</div>
                    <div>рус</div>
                    <div>Hr, развитие карьеры и профессиональный рост</div>
                </div>
            </div>
        </div>
    </div>
</template>