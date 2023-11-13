<script setup lang="ts">
    const jsonDataArr = []
    const readJsonData = async () => {
        // Указываем путь к папке data
        const dataPath = '../data'
        console.log(dataPath)
            // Считываем файлы JSON с помощью API Fetch
            fetch(dataPath)
            .then(response => response.json())
            .then(jsonData => {
                // Сохраняем считанные данные в переменную jsonData
                console.log(jsonData)
                console.log('sdf')
            })
            .catch(error => {
                console.error('Ошибка при чтении данных JSON:', error)
            })
    }

    readJsonData()
</script>