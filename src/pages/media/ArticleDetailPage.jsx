import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import MediaHero from "@/components/Media/MediaHero";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";

// Article data - same as ArticlePage but with full content
const articlesData = [
  {
    id: 1,
    slug: "importance-of-regular-eye-exams",
    title: "The Importance of Regular Eye Exams",
    excerpt: "Regular eye exams are crucial for maintaining good vision and detecting potential problems early.",
    author: "Dr. Sara Bekele",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop",
    readTime: "5 min read",
    category: "Preventive Care",
    content: `
Regular eye exams are one of the most important things you can do to maintain good vision and overall eye health. Many eye conditions develop gradually without noticeable symptoms, making routine check-ups essential for early detection and treatment.

## Why Regular Eye Exams Matter

Eye exams do more than just check your vision. They can reveal early signs of serious health conditions such as diabetes, high blood pressure, and even some types of cancer. Your eyes are one of the few places in the body where blood vessels can be observed directly, making them a window into your overall health.

## What to Expect During an Eye Exam

A comprehensive eye exam typically includes:

- **Visual acuity test**: Measures how clearly you see at various distances
- **Eye muscle test**: Checks for proper eye alignment and movement
- **Peripheral vision test**: Evaluates your side vision
- **Pupil response test**: Assesses how your pupils react to light
- **Tonometry**: Measures eye pressure to screen for glaucoma
- **Ophthalmoscopy**: Examines the back of your eye, including the retina and optic nerve

## Recommended Exam Frequency

The American Academy of Ophthalmology recommends:

- **Children**: First exam at 6 months, then at 3 years, and before starting school
- **Adults 20-39**: Every 5 years if no vision problems
- **Adults 40-54**: Every 2-4 years
- **Adults 55-64**: Every 1-3 years
- **Adults 65+**: Every 1-2 years

If you have risk factors like diabetes, high blood pressure, or a family history of eye disease, you may need more frequent exams.

## Conclusion

Don't wait until you notice vision problems to schedule an eye exam. Regular check-ups can help preserve your vision and catch issues before they become serious. Contact Orbit Optical today to schedule your comprehensive eye examination.
    `
  },
  {
    id: 2,
    slug: "protecting-eyes-digital-age",
    title: "Protecting Your Eyes in the Digital Age",
    excerpt: "Learn how to reduce digital eye strain and protect your vision in our technology-driven world.",
    author: "Dr. Michael Tadesse",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=400&fit=crop",
    readTime: "7 min read",
    category: "Digital Health",
    content: `
In today's digital world, most of us spend hours staring at screens—computers, smartphones, tablets, and TVs. This prolonged screen time can lead to a condition known as digital eye strain, also called computer vision syndrome.

## Symptoms of Digital Eye Strain

Common symptoms include:

- Eye fatigue and discomfort
- Dry, irritated eyes
- Blurred vision
- Headaches
- Neck and shoulder pain
- Difficulty focusing

## The 20-20-20 Rule

One of the most effective ways to reduce digital eye strain is following the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for at least 20 seconds. This gives your eye muscles a break from focusing on close-up screens.

## Tips for Reducing Eye Strain

### Optimize Your Workspace
- Position your screen 20-26 inches from your eyes
- Keep the screen slightly below eye level
- Reduce glare by adjusting room lighting or using an anti-glare screen

### Adjust Display Settings
- Increase text size for comfortable reading
- Adjust brightness to match your surroundings
- Use blue light filters, especially in the evening

### Practice Good Habits
- Blink frequently to keep eyes moist
- Take regular breaks to rest your eyes
- Use artificial tears if your eyes feel dry
- Consider computer glasses with anti-reflective coating

## Blue Light and Sleep

Blue light from screens can interfere with your sleep cycle by suppressing melatonin production. To improve sleep quality:

- Limit screen time 2-3 hours before bed
- Use night mode or blue light filtering apps
- Consider blue light blocking glasses for evening use

## When to See a Doctor

If you experience persistent symptoms despite taking preventive measures, schedule an appointment with an eye care professional. Chronic eye strain can sometimes indicate an underlying vision problem that needs correction.
    `
  },
  {
    id: 3,
    slug: "understanding-cataracts",
    title: "Understanding Cataracts: Causes and Treatment",
    excerpt: "Everything you need to know about cataracts, from early signs to modern treatment options.",
    author: "Dr. Lulit Abate",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
    readTime: "8 min read",
    category: "Treatment",
    content: `
Cataracts are one of the most common causes of vision loss worldwide, especially among older adults. Understanding this condition can help you recognize early signs and seek timely treatment.

## What Are Cataracts?

A cataract is a clouding of the eye's natural lens, which lies behind the iris and pupil. The lens, normally clear, helps focus light onto the retina to produce clear images. When proteins in the lens break down and clump together, they create cloudy areas that interfere with vision.

## Causes and Risk Factors

While aging is the primary cause of cataracts, several factors can increase your risk:

- **Age**: Most cataracts develop after age 55
- **Family history**: Genetic factors play a role
- **Diabetes**: Higher blood sugar levels can affect the lens
- **Smoking**: Increases the risk significantly
- **Excessive alcohol consumption**
- **Prolonged sun exposure**: UV rays damage lens proteins
- **Previous eye injury or surgery**
- **Long-term corticosteroid use**

## Recognizing the Signs

Cataract symptoms typically develop gradually:

- Cloudy, blurry, or dim vision
- Difficulty with night vision
- Sensitivity to light and glare
- Seeing 'halos' around lights
- Frequent prescription changes
- Fading or yellowing of colors
- Double vision in one eye

## Treatment Options

### Non-Surgical Management
In early stages, stronger lighting, magnifying lenses, and updated eyeglass prescriptions can help manage symptoms.

### Cataract Surgery
When cataracts significantly impact daily life, surgery is the only effective treatment. Modern cataract surgery is:

- **Safe**: One of the most commonly performed surgeries
- **Quick**: Usually takes 15-30 minutes
- **Effective**: Over 95% success rate
- **Low recovery time**: Most patients see improvement within days

During surgery, the clouded lens is removed and replaced with a clear artificial lens called an intraocular lens (IOL).

## Prevention Tips

While you can't completely prevent cataracts, you can reduce your risk:

- Wear sunglasses that block UV rays
- Quit smoking
- Maintain a healthy diet rich in antioxidants
- Manage diabetes and other health conditions
- Get regular eye exams

If you notice any changes in your vision, schedule an appointment with our specialists at Orbit Optical for a comprehensive evaluation.
    `
  },
  {
    id: 4,
    slug: "childrens-vision-guide",
    title: "Children's Vision: What Parents Should Know",
    excerpt: "A comprehensive guide for parents on monitoring and protecting their children's eye health.",
    author: "Dr. Daniel Girma",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=400&fit=crop",
    readTime: "6 min read",
    category: "Pediatrics",
    content: `
Good vision is essential for a child's physical development, academic success, and overall well-being. As a parent, understanding your child's visual development and knowing when to seek professional help is crucial.

## Vision Development in Children

Vision develops gradually from birth through childhood:

- **Birth to 4 months**: Babies begin to focus and track objects
- **5-8 months**: Depth perception and color vision develop
- **9-12 months**: Most babies can judge distances well
- **1-2 years**: Eye-hand coordination improves significantly
- **3-6 years**: Visual acuity reaches adult levels

## Warning Signs of Vision Problems

Watch for these signs that may indicate vision issues:

### In Infants
- Excessive tearing
- Red or encrusted eyelids
- Extreme sensitivity to light
- White pupil appearance
- Eyes that turn in or out

### In Older Children
- Squinting or closing one eye
- Sitting too close to the TV or holding books too close
- Frequent eye rubbing
- Tilting the head to see better
- Complaints of headaches or tired eyes
- Difficulty in school or avoiding reading

## Common Childhood Vision Problems

### Amblyopia (Lazy Eye)
Reduced vision in one eye due to abnormal visual development. Early treatment is crucial—usually before age 7—for the best outcomes.

### Strabismus (Crossed Eyes)
A condition where the eyes don't align properly. Treatment may include glasses, patching, or surgery.

### Refractive Errors
- **Myopia (nearsightedness)**: Difficulty seeing distant objects
- **Hyperopia (farsightedness)**: Difficulty seeing close objects
- **Astigmatism**: Blurred vision at all distances

## When to Schedule Eye Exams

Recommended schedule:
- **6 months**: First comprehensive eye exam
- **3 years**: Second exam
- **Before first grade**: Vision screening
- **School years**: Every 1-2 years or as recommended

## Protecting Your Child's Vision

- Ensure adequate outdoor play time
- Limit screen time and encourage breaks
- Provide a well-lit study environment
- Include eye-healthy foods in their diet
- Ensure protective eyewear during sports
- Schedule regular eye exams

Early detection and treatment of vision problems can make a significant difference in your child's life. If you have concerns about your child's vision, contact Orbit Optical to schedule a pediatric eye examination.
    `
  },
];

export default function ArticleDetailPage() {
  const { id } = useParams();
  
  // Find article by ID or slug
  const article = articlesData.find(
    (a) => String(a.id) === String(id) || a.slug === id
  );

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex flex-col items-center justify-center py-32 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/media/article"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Article Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 lg:py-40 overflow-hidden"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/media/article"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          
          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {article.category}
          </span>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-10 left-[5%] animate-float">
          <div className="w-4 h-4 rounded-full bg-primary/20"></div>
        </div>
        <div className="absolute top-20 left-[15%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-cyan-400/20"></div>
        </div>
        <div className="absolute top-32 right-[10%] animate-float">
          <div className="w-8 h-8 rounded-full bg-blue-400/15"></div>
        </div>
        <div className="absolute bottom-20 left-[8%] animate-float-delayed">
          <div className="w-7 h-7 rounded-full bg-blue-400/20"></div>
        </div>
        <div className="absolute bottom-32 right-[12%] animate-float">
          <div className="w-6 h-6 rounded-full bg-cyan-300/25"></div>
        </div>
        <div className="absolute top-1/2 right-[3%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-blue-300/20"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Body */}
          <article className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-blue-100 border border-blue-100 p-8 lg:p-12">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-strong:text-gray-800 prose-ul:text-gray-600 prose-li:text-gray-600">
              {article.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('- **')) {
                  const match = trimmed.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
                  if (match) {
                    return (
                      <li key={index} className="flex items-start gap-2 my-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>
                          <strong className="text-gray-800">{match[1]}</strong>
                          {match[2] && `: ${match[2]}`}
                        </span>
                      </li>
                    );
                  }
                }
                if (trimmed.startsWith('- ')) {
                  return (
                    <li key={index} className="flex items-start gap-2 my-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{trimmed.replace('- ', '')}</span>
                    </li>
                  );
                }
                
                return (
                  <p key={index} className="text-gray-600 leading-relaxed my-4">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-blue-100">
              <Link
                to="/media/article"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </Link>
              
              <div className="flex items-center gap-3">
                <button className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </article>

          {/* Author Card */}
          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-blue-100 border border-blue-100 p-6 flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{article.author}</h3>
              <p className="text-gray-600">Eye Care Specialist at Orbit Optical</p>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-5deg); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
