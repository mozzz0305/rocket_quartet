$(document).ready(function () {
    const wrapper = $('#wrapper');
    rocketData.forEach(rocket => {
        const card =
            $(`<div class="card">
        <div class="card-content">
            <div class="card-number">
            <p>${rocket.group_letter}${rocket.number}</p>
            </div>
            <div class="card-title">
                <div class="card-name">${rocket.name}</div>
                <div class="card-group">${rocket.group}</div>
            </div>
    
            <div class="rocket-image">
                <img src="images/voyager.webp" alt="Voyager 1">
            </div>
            <div class="goal-icon"><p>Goal</p></div>
            <div class="rocket-info"><p>${rocket.mission_goal}</p></div>
    
            <div class="stat-icon year"><p>Year built</p></div>
            <div class="stat-value year m"><p>${rocket.year_built}</p></div>
    
            <div class="stat-icon duration"><p>Mission duration</p></div>
            <div class="stat-value duration"><p>${rocket.mission_duration}</p></div>
    
            <div class="stat-icon speed"><p>Max speed</p></div>
            <div class="stat-value speed m"><p>${rocket.max_speed}</p></div>
    
            <div class="stat-icon distance"><p>Max earth distance</p></div>
            <div class="stat-value distance"><p>${rocket.max_earth_distance}</p></div>
    
            <div class="stat-icon cost"><p>Development cost</p></div>
            <div class="stat-value cost m"><p>${rocket.development_cost}</p></div>
    
            <div class="stat-icon weight"><p>Weight</p></div>
            <div class="stat-value weight"><p>${rocket.weight}</p></div>
    
        </div>
    </div>`);
        wrapper.append(card);
    });
});