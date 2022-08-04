<script>
    import Card from '../components/Card.svelte'
</script>

<div class="wrapper">
    <Card src='/graphics/main/Situp.svg' alt='a person laying down in bed' cardText='Incline Bed'/>
    <Card src='/graphics/main/Laydown.svg' alt='a person sitting up in bed' cardText='Lay down'/>
    <Card src='/graphics/main/Sitting.svg' alt='a person sitting in a chair' cardText='Sit up'/>
    <Card src='/graphics/main/Medicine.svg' alt='a medicine pill' cardText='Need Medicine'/>
    <Card src='/graphics/main/Nurse.svg' alt='Nurse with a hat on' cardText='Nurse or Doctor'/>
    <Card src='/graphics/main/Pain.svg' alt='two medicine pills overlapping' cardText='In Pain' pageLink='/pain'/>
    <Card src='/graphics/main/Drink.svg' alt='a steaming bowl of soup' cardText='Food/Drink'/>
    <Card src='/graphics/main/TV.svg' alt='a modern television' cardText='TV'/>
    <Card src='graphics/main/Bath.svg' alt='a bathutub' cardText='Bath'/>
</div>

<style>
    .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        padding: 0;
        margin: 0;
    }

</style>