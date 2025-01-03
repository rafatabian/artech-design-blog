import "./Home.css"
import { FaArrowRight, FaArrowDown, FaArrowUp} from "react-icons/fa6"

const Home = () => {
  return (
    <div className='home_container'>
          <div className='home_intro_container'>
            <h1 className="home_title">How the Design of Your Website Can Impact Your Business</h1>
            <span className="home_shadow"></span>

            <div className="home_buttons_container">
              <a href="#text" alt="scroll down">Discover<FaArrowDown /></a>
              <a href="https://artech-agency.co" alt="external website to artech">Start with us<FaArrowRight/></a>
            </div>
          </div>

          <div className="home_text_container" id="text">
          <h2 className="home_title_top_five">First Impressions Matter: Why Your Website Design Can Make or Break Your Business</h2>
            <p className="home_paragraph">Did you know that 75% of users judge a company’s credibility based on its website design? That’s right—your website is often the first impression people have of your business. And we all know how important first impressions are.</p>
            <p className="home_paragraph">Imagine walking into a store that’s cluttered, outdated, and hard to navigate. You’d probably leave, right? The same thing happens online. In fact, a Stanford study found that nearly half of users decide whether to stay on a website in just 0.05 seconds based on its appearance. That’s less than the blink of an eye!</p>
            <p className="home_paragraph">Good design isn’t just about aesthetics. It’s about usability. According to a study by Adobe, 38% of users will stop engaging with a website if the layout is unattractive or difficult to use.</p>
            <p className="home_paragraph">Let’s take a moment to think about your own website. Does it have a clear structure? Is it easy to navigate? Do your colors and fonts reflect your brand’s identity? If not, you could be losing potential customers.</p>
            <p className="home_paragraph">Here’s the good news: A well-designed website can increase your conversions significantly. Studies show that improving your website’s user experience can boost conversions by up to 400%. Yes, 400%!</p>
            <p className="home_paragraph">That means if you’re currently getting 10 sales a day, a redesign could bring you 40. That’s the power of investing in your website.</p>
            <div className="home_image_continer"></div>
            <h2 className="home_title_top_five">So, what makes a great website design? Here are the top five elements to focus on:</h2>
            <div className="home_top_five"><h3>Responsive Design:</h3><p>Your website must look great on any device, whether it’s a phone, tablet, or desktop. With more than half of web traffic coming from mobile devices, ensuring a seamless experience across platforms is essential.</p></div>
            <div className="home_top_five"><h3>Fast Loading Speed:</h3><p> Research by Google shows that 53% of mobile users abandon sites that take longer than 3 seconds to load. A fast website not only improves user experience but also boosts your SEO rankings.</p></div>
            <div className="home_top_five"><h3>Clear Call-to-Actions (CTAs):</h3><p>Guide your visitors to take action—whether that’s making a purchase, signing up, or contacting you. A well-placed and visually appealing CTA can significantly improve your conversion rate.</p></div>
            <div className="home_top_five"><h3>SEO-Friendly Design:</h3><p>A good design isn’t just for humans; it’s for search engines too. This includes clean code, proper meta tags, and an intuitive structure that helps search engines understand your site.</p></div>
            <div className="home_top_five"><h3>Visual Consistency and Branding: </h3><p>Your website should reflect your brand’s identity. Consistent use of colors, fonts, and imagery helps build trust and recognition with your audience.</p></div>
            <p className="home_paragraph">Beyond these essentials, remember that small tweaks can also have a big impact. Even something as simple as using high-quality images, optimizing your text for readability, or incorporating whitespace strategically can make your site more appealing.</p>
            <p className="home_paragraph">At Artech, we specialize in creating websites that aren’t just visually stunning but also drive results. Our designs focus on user experience, branding, and functionality to make sure your website works as hard as you do.</p>
            <p className="home_paragraph">So, what do you think? Is your website helping your business grow, or is it holding you back? If you’re ready to take your website to the next level, reach out to us at Artech. Let’s create something amazing together!</p>
          </div>

          <div className="home_footer_buttons_container">
              <a href="#text" alt="scroll down">Discover<FaArrowUp/></a>
              <a href="https://artech-agency.co" alt="external website to artech">Start with us<FaArrowRight/></a>
            </div>
    </div>
  )
}

export default Home