import mountain1 from './mountain1.jpg'
import mountain2 from './mountain2.jpg'
import mountain3 from './mountain3.jpg'

function PricingPanel () {
  return (
    <div>
      <div class="background">
  <div class="container">
    <div class="panel pricing-table">
      
      <div class="pricing-plan">
        <img className="image" src={mountain1} />
        <h2 class="pricing-header">Personal</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Custom domains</li>
          <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
        </ul>
        <span class="pricing-price">Free</span>
        <a href="#/" class="pricing-button">Sign up</a>
      </div>
      
      <div class="pricing-plan">
        <img className="image" src={mountain2} />
        <h2 class="pricing-header">Small team</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Never sleeps</li>
          <li class="pricing-features-item">Multiple workers for more powerful apps</li>
        </ul>
        <span class="pricing-price">$150</span>
        <a href="#/" class="pricing-button is-featured">Free trial</a>
      </div>
      
      <div class="pricing-plan">
        <img className="image" src={mountain3} />
        <h2 class="pricing-header">Enterprise</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Dedicated</li>
          <li class="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span class="pricing-price">$400</span>
        <a href="#/" class="pricing-button">Free trial</a>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default PricingPanel