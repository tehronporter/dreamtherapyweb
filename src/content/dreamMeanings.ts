import type { SEOContentItem } from "./types";

const lastUpdated = "2026-05-10";

type DreamSeed = {
  slug: string;
  title: string;
  symbol: string;
  situation: string;
  description?: string;
  quickAnswer?: string;
  emotionalTheme: string;
  spiritualTheme: string;
  variations: string;
  prompts: string;
  uniqueSection?: {
    heading: string;
    body: string;
  };
  extraFaqs?: SEOContentItem["faqs"];
  showApproachNote?: boolean;
  relatedSlugs: string[];
  keywords: string[];
};

function buildDreamMeaning(seed: DreamSeed): SEOContentItem {
  return {
    slug: seed.slug,
    title: `${seed.title} | DreamTherapy`,
    description:
      seed.description ||
      `Learn what ${seed.title.toLowerCase()} may suggest emotionally, psychologically, and spiritually, with common variations, journaling prompts, and calmer interpretation guidance.`,
    h1: seed.title,
    quickAnswer:
      seed.quickAnswer ||
      `${seed.title} may point toward ${seed.emotionalTheme}. It rarely means just one thing. The clearest interpretation usually comes from the emotional tone of the dream, what was changing in your life, and whether the symbol felt threatening, protective, intimate, unfamiliar, or strangely calm.`,
    showApproachNote: seed.showApproachNote,
    sections: [
      {
        heading: "What This Dream May Be Pointing To",
        body: `${seed.situation} often appears when the mind is trying to bring something emotionally important closer to the surface. The dream may be highlighting ${seed.emotionalTheme}, but it can also reflect a broader season of change, stress, longing, or self-protection.\n\nInstead of asking for a fixed definition, start with the mood of the dream. A dream that felt tender has a different message than the same symbol inside panic. That emotional texture is often the difference between a generic reading and one that actually feels true.`,
      },
      {
        heading: "Psychological Meaning",
        body: `${seed.situation} can reflect the mind trying to organize pressure, memory, desire, or uncertainty. In a psychological sense, this dream may be less about prediction and more about attention. The dream image gives shape to something that may be difficult to name directly while awake.\n\nNotice whether you were active or passive in the scene, whether the dream moved quickly or slowly, and whether the central symbol felt threatening, familiar, protective, or strange. Those details often reveal whether the dream is about overwhelm, an avoided feeling, a changing identity, or a part of life that needs language.`,
      },
      {
        heading: "Emotional Meaning",
        body: `Emotion is often the clearest doorway into the dream. This dream could reflect ${seed.emotionalTheme}, especially if the feeling stayed with you after waking. A calm version of the dream may suggest integration or readiness. A tense version may suggest that part of your inner life wants care, space, or language.\n\nRather than forcing a single interpretation, ask what emotional pattern the dream is helping you notice. Did the dream feel like pressure, grief, desire, shame, relief, curiosity, or unfinished business? The answer may matter more than the symbol by itself.`,
      },
      {
        heading: "Spiritual Meaning",
        body: `Spiritually, ${seed.symbol.toLowerCase()} might symbolize ${seed.spiritualTheme}. This does not mean the dream is a prophecy or a command. It may be a symbolic invitation to listen more closely to intuition, transition, grief, longing, protection, or renewal.\n\nMany people use dreams as a reflective practice because symbols can hold several truths at once without reducing the experience to a simple answer. In that sense, the dream may be less about certainty and more about relationship: what part of you is asking to be noticed, trusted, softened, or released.`,
      },
      {
        heading: "Common Variations",
        body: `${seed.variations}\n\nVariation matters because the dream changes meaning through setting, intensity, and your role in the scene. A symbol that approaches you can feel different from one you are chasing. A dream that ends in relief will often carry a different emotional message than a dream that ends in panic or disappearance.`,
      },
      {
        heading: "When This Dream May Return",
        body: `Dreams like this often return during periods of emotional transition, increased stress, relationship tension, grief, or identity change. If this dream is recurring, the repetition itself may be meaningful. The dream may be circling the same question because your relationship to the feeling has not fully shifted yet.\n\nIf the dream keeps returning, compare several versions instead of reading one night in isolation. Look for what stays the same, what changes, and whether you gain more choice, voice, or calm inside the dream over time.`,
      },
      {
        heading: "Reflection Prompts",
        body: `${seed.prompts}\n\nYou might also ask: What was the emotional peak of the dream? What detail felt most alive or memorable? What in waking life carries a similar emotional texture right now?`,
      },
      {
        heading: "How To Journal This Dream",
        body: `Write down the setting, the strongest image, the strongest feeling, and the final moment before waking. Then note one waking-life situation that feels emotionally similar. This keeps the interpretation grounded in your own life instead of turning into a generic dream dictionary entry.\n\nIf the dream feels important, revisit it after a few days. Often the meaning becomes clearer once the first emotional reaction has softened and the symbol can be read in a wider context.`,
      },
      ...(seed.uniqueSection ? [seed.uniqueSection] : []),
    ],
    faqs: [
      {
        question: `What does ${seed.title.toLowerCase()} usually mean?`,
        answer: `It usually depends on the emotional tone and personal context. The dream may suggest ${seed.emotionalTheme}, but it should be read as a reflective symbol rather than a fixed definition.`,
      },
      {
        question: "Should I be worried about this dream?",
        answer:
          "Not automatically. Even intense dreams can be the mind's way of processing stress, change, or unresolved feeling. If a dream is disturbing or recurring, it may be worth journaling the pattern and seeking support if it affects daily life.",
      },
      {
        question: "How can I understand this dream more personally?",
        answer:
          "Write down the setting, people, strongest emotion, and the moment that felt most charged. Then compare the dream to what has been repeating in your waking life.",
      },
      {
        question: "What if this dream keeps repeating?",
        answer:
          "A recurring version of the dream may suggest an emotional pattern, conflict, or life transition that still feels unfinished. Compare several versions and watch for changes in intensity, agency, or ending.",
      },
      ...(seed.extraFaqs ?? []),
    ],
    relatedSlugs: seed.relatedSlugs,
    keywords: seed.keywords,
    lastUpdated,
  };
}

export const dreamMeanings: SEOContentItem[] = [
  buildDreamMeaning({
    slug: "snake-dream-meaning",
    title: "Snake Dream Meaning",
    symbol: "Snakes",
    situation: "Dreaming about snakes",
    description:
      "Explore what dreaming about snakes means — from fear and transformation to healing, instinct, and shadow work. Includes variations, journaling prompts, and calm interpretation guidance.",
    quickAnswer:
      "Dreaming about snakes often points toward transformation, instinct, hidden fear, or a part of life that feels powerful but not fully understood yet. The strongest clue is usually not the snake itself, but whether it felt threatening, wise, invasive, protective, or strangely calm.",
    emotionalTheme: "transformation, guarded intuition, hidden fear, or a part of yourself that is ready to change",
    spiritualTheme: "renewal, shadow work, instinct, and the shedding of an old identity",
    variations:
      "A snake biting you may suggest a sharp realization, a boundary violation, or an emotion you can no longer avoid. A snake watching you could reflect awareness of something powerful but not yet acted on. Many snakes may point toward overwhelm, social tension, or an environment that feels emotionally unsafe. A calm snake may symbolize wisdom, healing, or a transition that is less dangerous than it first appears. A snake in water can intensify the emotional meaning, while a snake in your house may point more directly toward identity, intimacy, or the inner life.",
    prompts:
      "Ask yourself: What changed recently? Where do I feel both fear and fascination? What am I shedding? What did the snake seem to want from me in the dream?",
    uniqueSection: {
      heading: "Why Snake Dreams Feel So Charged",
      body:
        "Snake dreams tend to feel memorable because the symbol carries tension in both directions. It can suggest danger, but it can also suggest healing, instinct, rebirth, sexuality, or the pressure of rapid change. That symbolic duality is part of why snake dreams so often stay with people after waking.\n\nIf the dream felt frightening, do not stop at fear. Ask whether the dream was only warning you, or whether it was also showing you a part of yourself that feels potent, alert, and difficult to ignore. Some snake dreams are less about threat than about energy that has not found language yet.",
    },
    extraFaqs: [
      {
        question: "What does it mean if the snake bites me in the dream?",
        answer:
          "A snake bite often suggests something emotionally sharp: a realization, a betrayal, a stress point, or a feeling that has become impossible to avoid. The meaning shifts with the tone of the dream and what was happening just before the bite.",
      },
      {
        question: "Are snake dreams always bad?",
        answer:
          "No. Snake dreams can feel frightening, but they can also point toward transformation, intuition, healing, sexuality, or a life transition that is asking for attention.",
      },
    ],
    showApproachNote: true,
    relatedSlugs: [
      "snakes",
      "jungian-dream-analysis",
      "how-emotions-influence-dreams",
      "how-dreamtherapy-interprets-dreams",
      "ai-dream-interpreter",
    ],
    keywords: ["snake", "fear", "transformation", "shadow", "instinct"],
  }),
  buildDreamMeaning({
    slug: "teeth-falling-out-dream-meaning",
    title: "Teeth Falling Out Dream Meaning",
    symbol: "Teeth",
    situation: "Dreams about teeth falling out",
    description:
      "Understand what teeth falling out dreams mean — from anxiety and self-image to communication stress and loss of control. Includes why these dreams feel so vivid and personal.",
    quickAnswer:
      "Teeth falling out dreams often connect to vulnerability, communication stress, self-image, or the fear that something stable is slipping out of your control. They can feel dramatic because they touch identity so quickly.",
    emotionalTheme: "vulnerability, self-image, communication anxiety, or fear of losing control",
    spiritualTheme: "release, humility, identity change, and the discomfort of becoming more honest",
    variations:
      "Teeth crumbling may reflect exhaustion or a sense that something dependable feels fragile. Pulling out your own teeth can suggest agency mixed with discomfort, especially when you feel forced to make a painful decision. Spitting out teeth often points toward panic, embarrassment, or a fear of losing face. Looking in a mirror after losing teeth may connect the dream to identity, appearance, aging, or the wish to be seen differently.",
    prompts:
      "Ask yourself: Where do I feel exposed? What am I afraid to say? Has my confidence changed lately? What part of my identity feels like it is shifting?",
    uniqueSection: {
      heading: "Why This Dream So Often Connects To Anxiety",
      body:
        "Teeth dreams often feel bodily and immediate, which is part of why they are so commonly remembered as anxiety dreams. They can mirror moments when confidence feels unstable, communication feels risky, or appearance and self-presentation carry more pressure than usual.\n\nThat does not mean every teeth dream is about vanity. Sometimes it is about voice. Sometimes it is about aging, change, or feeling suddenly less defended than you expected. The emotional context matters more than the symbol alone.",
    },
    extraFaqs: [
      {
        question: "Why do I keep dreaming that my teeth are falling out?",
        answer:
          "Recurring teeth dreams often suggest an ongoing pattern of stress, exposure, communication pressure, or identity instability. Compare when they happen and what part of life feels especially visible or fragile.",
      },
      {
        question: "Do teeth falling out dreams mean stress?",
        answer:
          "They often can, especially when the dream carries panic, embarrassment, or helplessness. But they may also relate to self-image, transition, aging, or a fear of losing control.",
      },
    ],
    showApproachNote: true,
    relatedSlugs: [
      "teeth",
      "dream-journaling",
      "dream-symbols-and-emotions",
      "how-emotions-influence-dreams",
      "dream-journal-app",
    ],
    keywords: ["teeth", "anxiety", "communication", "identity", "control"],
  }),
  buildDreamMeaning({
    slug: "dream-about-ex",
    title: "Dream About an Ex Meaning",
    symbol: "An ex",
    situation: "Dreaming about an ex",
    description:
      "Understand what dreaming about an ex really means — attachment, unfinished emotion, memory patterns, and why these dreams return during relationship change or life transition.",
    quickAnswer:
      "Dreaming about an ex usually says more about memory, attachment, unfinished feeling, or a repeated emotional pattern than it does about the relationship literally returning. The strongest clue is what the ex represented in the dream version of your life.",
    emotionalTheme: "unfinished emotional processing, comparison, memory, attachment, or a returning pattern",
    spiritualTheme: "closure, forgiveness, self-recognition, and learning from past bonds",
    variations:
      "A peaceful dream about an ex may suggest integration rather than a desire to return. Conflict with an ex may point to an unresolved feeling, a familiar dynamic, or a repeating wound. Dreaming of getting back together can sometimes reflect longing for a former version of yourself, not only the person. Dreaming that the ex ignores you may connect to rejection, unfinished grief, or the wish for closure. If the ex appears during a current relationship, the dream may be contrasting emotional patterns rather than comparing people directly.",
    prompts:
      "Ask yourself: What quality does this person represent? What did I feel when I woke up? Is there a pattern from that relationship showing up elsewhere now?",
    uniqueSection: {
      heading: "When An Ex Dream Is Really About You",
      body:
        "One of the most common mistakes with ex dreams is reading them too literally. Sometimes the dream is about that person. But just as often it is about the emotional version of you that existed in that relationship: more anxious, more hopeful, less defended, more confused, or more willing to abandon your own needs.\n\nThat is why ex dreams often return during transitions. A current conflict, breakup, loneliness, or identity shift can wake up an older emotional pattern and give it a familiar face.",
    },
    extraFaqs: [
      {
        question: "Does dreaming about my ex mean I still love them?",
        answer:
          "Not necessarily. It may reflect memory, unfinished feeling, comparison, longing for a former version of yourself, or a pattern your mind is revisiting during change.",
      },
      {
        question: "Why am I dreaming about my ex when I am in a new relationship?",
        answer:
          "The dream may be comparing emotional dynamics, surfacing old attachment patterns, or highlighting what feels similar or different in your current relationship.",
      },
    ],
    showApproachNote: true,
    relatedSlugs: [
      "mirrors",
      "recurring-dreams",
      "dreams-during-stressful-life-transitions",
      "what-dreams-may-mean",
      "dream-journal-app",
    ],
    keywords: ["ex", "relationship", "closure", "memory", "attachment"],
  }),
  buildDreamMeaning({
    slug: "being-chased-dream-meaning",
    title: "Being Chased Dream Meaning",
    symbol: "Being chased",
    situation: "Being chased in a dream",
    description:
      "Learn what being chased in a dream means — avoidance, fear, pressure, stress, and why recurring chase dreams signal something deeper than the chaser itself.",
    quickAnswer:
      "Being chased in a dream often points toward avoidance, pressure, fear, or a feeling that something in waking life keeps catching up with you. Chase dreams are often less about the pursuer and more about the emotional pattern of running.",
    emotionalTheme: "avoidance, pressure, fear, urgency, or a conflict asking to be faced",
    spiritualTheme: "the call to turn toward what has been avoided with courage and compassion",
    variations:
      "Being chased by a stranger can suggest a vague pressure that has not yet been named. Being chased by someone familiar may point toward a relationship dynamic or a known source of stress. Being chased through your childhood home can bring memory and older fear patterns into the dream. Escaping may suggest resilience, while hiding may suggest a need for safety before action. Turning around to face the chaser can be especially meaningful in recurring chase dreams because it often signals a shift in agency.",
    prompts:
      "Ask yourself: What am I avoiding? What keeps catching up with me? Did I want to escape, understand, confront, or disappear?",
    uniqueSection: {
      heading: "The Psychology Of Running",
      body:
        "Chase dreams often become more understandable when you focus on the act of running itself. The psyche may be staging what avoidance feels like: urgency, narrowed attention, a body that cannot fully rest, and a sense that something unresolved is always just behind you.\n\nThat does not mean the answer is always to confront everything immediately. Sometimes the dream is showing overwhelm rather than cowardice. The useful question is whether the dream is asking for direct action, clearer language, more support, or simply a more honest look at what you have been trying not to feel.",
    },
    extraFaqs: [
      {
        question: "Why do I keep having chase dreams?",
        answer:
          "Recurring chase dreams often suggest an ongoing pattern of pressure, avoidance, anxiety, or unresolved fear. Look at what keeps repeating emotionally, not only who or what is chasing you.",
      },
      {
        question: "What does it mean if I turn around in the chase dream?",
        answer:
          "Turning around can signal a shift in agency. It may suggest that you are becoming more ready to name, face, or understand what the dream has been expressing.",
      },
    ],
    showApproachNote: true,
    relatedSlugs: [
      "dogs",
      "nightmares-stress-and-reflection",
      "the-psychology-of-being-chased-in-dreams",
      "recurring-dreams",
      "ai-dream-interpreter",
    ],
    keywords: ["chased", "avoidance", "fear", "pressure", "nightmare"],
  }),
  buildDreamMeaning({
    slug: "falling-dream-meaning",
    title: "Falling Dream Meaning",
    symbol: "Falling",
    situation: "Falling in a dream",
    description:
      "Explore what falling dreams mean — loss of control, surrender, uncertainty, or releasing tension. Includes variations like falling from heights, into water, and waking before landing.",
    emotionalTheme: "loss of control, surrender, uncertainty, or the body releasing tension",
    spiritualTheme: "trust, letting go, humility, and the space between endings and landing",
    variations:
      "Falling from a building may connect to ambition or pressure. Falling into water can bring emotional release into the meaning. Waking before landing may suggest anticipation, while landing safely may point toward trust in your ability to adapt.",
    prompts:
      "Ask yourself: Where do I feel unsupported? What am I trying to control? What would it mean to land rather than brace?",
    relatedSlugs: ["water", "ocean", "lost-dream-meaning", "how-to-remember-dreams"],
    keywords: ["falling", "control", "surrender", "uncertainty", "stress"],
  }),
  buildDreamMeaning({
    slug: "water-dream-meaning",
    title: "Water Dream Meaning",
    symbol: "Water",
    situation: "Dreaming about water",
    description:
      "Discover what water dreams mean — emotion in motion, intuition, grief, overwhelm, and cleansing. Includes floods, clear water, drowning, and ocean variations explained.",
    quickAnswer:
      "Water dreams often reflect emotion in motion: intuition, grief, cleansing, sensitivity, or overwhelm. The clearest clue is the state of the water itself, because calm water usually means something different from flooding, dark water, or waves you cannot control.",
    emotionalTheme: "emotional depth, sensitivity, cleansing, overwhelm, or the movement of feeling",
    spiritualTheme: "intuition, renewal, grief, healing, and the unconscious mind",
    variations:
      "Clear water may suggest emotional clarity. Dark water can point toward mystery, grief, or feelings not yet understood. A flood may suggest overwhelm, while gentle rain may symbolize soft release or restoration. Water inside a house can connect emotion to the private self or family life. Ocean water may expand the meaning toward awe, depth, or emotional vastness. Drowning in the water can shift the dream from feeling into overload.",
    prompts:
      "Ask yourself: Was the water calm or forceful? Did I enter it willingly? What emotion in my life feels like it is rising, clearing, or asking to move?",
    uniqueSection: {
      heading: "Why Water Is One Of The Most Important Dream Symbols",
      body:
        "Water appears so often in dreams because it can hold many emotional states without losing coherence. It can cleanse, drown, soothe, conceal, carry, reflect, or overwhelm. That range makes it one of the most expressive symbolic containers in dream life.\n\nIf you are trying to interpret a water dream, start with the movement and your relationship to it. Were you watching the water, entering it, escaping it, floating in it, or being pulled under? Water rarely means emotion in the abstract. It usually means a specific emotional experience.",
    },
    extraFaqs: [
      {
        question: "What does clear water mean in a dream?",
        answer:
          "Clear water often suggests emotional clarity, relief, or a feeling that something inward is easier to understand. It can also suggest cleansing or a calmer relationship to feeling.",
      },
      {
        question: "What does a flood dream mean?",
        answer:
          "Flood dreams often point toward overwhelm, emotional buildup, or circumstances that feel larger or faster than your current sense of control.",
      },
    ],
    showApproachNote: true,
    relatedSlugs: [
      "water",
      "why-we-dream",
      "how-emotions-influence-dreams",
      "dream-symbols-and-emotions",
      "dream-journal-app",
    ],
    keywords: ["water", "emotion", "intuition", "healing", "unconscious"],
  }),
  buildDreamMeaning({
    slug: "drowning-dream-meaning",
    title: "Drowning Dream Meaning",
    symbol: "Drowning",
    situation: "Drowning in a dream",
    description:
      "Understand what drowning dreams mean — overwhelm, emotional flooding, burnout, and the feeling of losing ground. Includes variations like being rescued or watching others drown.",
    emotionalTheme: "overwhelm, emotional flooding, burnout, or feeling unable to find enough space",
    spiritualTheme: "surrender, rescue, emotional truth, and the need to return to breath",
    variations:
      "Drowning alone may point toward isolation or private pressure. Being rescued can suggest support becoming available. Watching someone else drown may reflect helplessness or concern about a relationship.",
    prompts:
      "Ask yourself: What feels like too much? Where do I need help? What would give me room to breathe this week?",
    relatedSlugs: ["water-dream-meaning", "ocean", "nightmares-stress-and-reflection", "how-to-build-a-dream-journaling-habit"],
    keywords: ["drowning", "overwhelm", "water", "burnout", "emotion"],
  }),
  buildDreamMeaning({
    slug: "cheating-dream-meaning",
    title: "Cheating Dream Meaning",
    symbol: "Cheating",
    situation: "Dreams about cheating",
    description:
      "Explore what cheating dreams mean — insecurity, trust concerns, emotional distance, and why these dreams often reflect your relationship with yourself more than your partner.",
    emotionalTheme: "insecurity, trust, comparison, hidden desire, or fear of emotional distance",
    spiritualTheme: "alignment, honesty, loyalty to the self, and the repair of divided attention",
    variations:
      "Being cheated on may reflect fear of abandonment or comparison. Cheating in the dream may suggest guilt, curiosity, or a part of life where your energy feels split. The dream may also be about trust more broadly, not only romance.",
    prompts:
      "Ask yourself: Where do I feel replaced, divided, or unseen? Is there a conversation I am avoiding? What does fidelity mean beyond the relationship itself?",
    relatedSlugs: ["dream-about-ex", "mirrors", "recurring-dreams-and-patterns", "dream-journaling"],
    keywords: ["cheating", "trust", "relationship", "insecurity", "guilt"],
  }),
  buildDreamMeaning({
    slug: "death-dream-meaning",
    title: "Death Dream Meaning",
    symbol: "Death",
    situation: "Dreaming about death",
    description:
      "Understand what death dreams mean — endings, grief, identity change, and transformation. Learn why dreaming about death is rarely a prediction and almost always symbolic.",
    quickAnswer:
      "Death dreams often symbolize transition, grief, identity change, or the ending of a chapter rather than literal prediction. They can feel intense because they bring change into its most final symbolic form.",
    emotionalTheme: "transition, grief, endings, fear of change, or a chapter closing",
    spiritualTheme: "rebirth, transformation, ancestor memory, and the sacredness of endings",
    variations:
      "Dreaming of your own death may reflect identity change or fear of losing an old role. Dreaming of someone else dying may connect to change in that relationship or your perception of them. A peaceful death dream can suggest acceptance, while a frightening one may reveal resistance. If the person dies and returns, the dream may be staging transformation more than ending. Funeral imagery may bring grief, memory, or public change into the interpretation.",
    prompts:
      "Ask yourself: What is ending or changing? What part of me is no longer leading? What grief or gratitude is present?",
    uniqueSection: {
      heading: "Why Death Dreams Are Often Misread",
      body:
        "Death dreams are easy to overread because the symbol feels absolute. But in dream language, death often acts as a dramatic form of transition. It may symbolize grief, an identity shift, the end of a relationship dynamic, the closing of an old role, or a part of the self that no longer fits.\n\nThat does not make the dream light or abstract. It may still carry real sadness, fear, or tenderness. The key is to ask what is ending symbolically in your life before leaping to literal conclusions.",
    },
    extraFaqs: [
      {
        question: "Do death dreams predict real death?",
        answer:
          "Usually no. Death dreams are far more often symbolic expressions of change, grief, fear, identity transition, or the end of a chapter than literal predictions.",
      },
      {
        question: "What does it mean to dream about someone else dying?",
        answer:
          "It may reflect change in your relationship to that person, your perception of them, or a part of life they symbolize. The meaning is usually relational or symbolic rather than literal.",
      },
    ],
    showApproachNote: true,
    relatedSlugs: [
      "fire",
      "why-humans-dream",
      "jungian-dream-analysis",
      "how-dreamtherapy-interprets-dreams",
      "best-dream-interpretation-app",
    ],
    keywords: ["death", "ending", "rebirth", "grief", "change"],
  }),
  buildDreamMeaning({
    slug: "flying-dream-meaning",
    title: "Flying Dream Meaning",
    symbol: "Flying",
    situation: "Flying in a dream",
    description:
      "Discover what flying dreams mean — freedom, confidence, perspective, and the desire to rise above pressure. Includes what struggling to fly or flying over familiar places can reveal.",
    emotionalTheme: "freedom, perspective, confidence, escape, or a wish to rise above pressure",
    spiritualTheme: "liberation, higher perspective, imagination, and the soul's need for spaciousness",
    variations:
      "Flying easily may suggest confidence or creative openness. Struggling to fly can reflect self-doubt or resistance. Flying over a familiar place may offer new perspective on a situation you know well.",
    prompts:
      "Ask yourself: What did freedom feel like? Was I escaping or exploring? Where in life do I need more room, altitude, or perspective?",
    relatedSlugs: ["birds", "ocean", "dream-symbols-and-emotions", "how-ai-dream-interpretation-works"],
    keywords: ["flying", "freedom", "perspective", "escape", "confidence"],
  }),
  buildDreamMeaning({
    slug: "pregnancy-dream-meaning",
    title: "Pregnancy Dream Meaning",
    symbol: "Pregnancy",
    situation: "Dreaming about pregnancy",
    description:
      "Explore what pregnancy dreams mean — new beginnings, creativity, responsibility, and anticipation. These dreams are rarely literal, often pointing to something new forming in your life.",
    emotionalTheme: "creation, anticipation, responsibility, vulnerability, or something new developing",
    spiritualTheme: "fertility of ideas, becoming, patience, and the protection of what is still forming",
    variations:
      "Being pregnant in a dream may point to a new project, identity, or emotional development. Seeing someone else pregnant may reflect awareness of change around you. Anxiety in the dream can suggest pressure around timing or responsibility.",
    prompts:
      "Ask yourself: What is growing in me or around me? What needs protection before it is ready? Am I excited, afraid, or both?",
    relatedSlugs: ["house-dream-meaning", "dream-journaling", "what-dreams-may-mean", "birds"],
    keywords: ["pregnancy", "creation", "new beginning", "responsibility", "growth"],
  }),
  buildDreamMeaning({
    slug: "house-dream-meaning",
    title: "House Dream Meaning",
    symbol: "Houses",
    situation: "Dreaming about a house",
    description:
      "Understand what house dreams mean — identity, memory, safety, and the structure of the self. Childhood homes, unfamiliar rooms, and damaged houses each carry distinct emotional signals.",
    emotionalTheme: "identity, inner life, safety, memory, or the structure of the self",
    spiritualTheme: "the inner temple, belonging, ancestry, and rooms of consciousness",
    variations:
      "A childhood home may connect to memory or early patterns. A house with many rooms can suggest unexplored parts of yourself. A damaged house may reflect stress around stability, while a beautiful house may suggest expansion or integration.",
    prompts:
      "Ask yourself: Which room mattered most? Did the house feel like mine? What part of my life feels under construction, hidden, or ready to be lived in?",
    relatedSlugs: ["houses", "mirrors", "lost-dream-meaning", "jungian-dream-analysis"],
    keywords: ["house", "home", "identity", "safety", "self"],
  }),
  buildDreamMeaning({
    slug: "car-accident-dream-meaning",
    title: "Car Accident Dream Meaning",
    symbol: "Car accident",
    situation: "Dreaming about a car accident",
    description:
      "Explore what car accident dreams mean — disrupted direction, fear of consequences, and loss of control. Includes what it means to be driving, a passenger, or a bystander in the crash.",
    emotionalTheme: "direction, control, collision, fear of consequences, or a disrupted plan",
    spiritualTheme: "course correction, attention, humility, and the need to slow down",
    variations:
      "Driving during the accident may suggest responsibility or pressure. Being a passenger can point to feeling carried by someone else's choices. Watching an accident may reflect anxiety about a situation outside your control.",
    prompts:
      "Ask yourself: Who was driving? Where was I headed? What in my life feels too fast, unstable, or close to impact?",
    relatedSlugs: ["being-chased-dream-meaning", "lost-dream-meaning", "nightmares-stress-and-reflection", "recurring-dreams"],
    keywords: ["car accident", "control", "direction", "fear", "course correction"],
  }),
  buildDreamMeaning({
    slug: "lost-dream-meaning",
    title: "Lost Dream Meaning",
    symbol: "Being lost",
    situation: "Being lost in a dream",
    description:
      "Discover what being lost in a dream means — uncertainty, disorientation, searching, and transition. A calm guide to what your mind may be navigating when you can't find your way.",
    emotionalTheme: "uncertainty, transition, searching, disorientation, or the need for guidance",
    spiritualTheme: "thresholds, pilgrimage, trust, and finding direction from within",
    variations:
      "Being lost in a city may reflect social or professional confusion. Being lost in nature can suggest instinct and inner guidance. Searching for a person or place may show what your psyche is trying to reconnect with.",
    prompts:
      "Ask yourself: What was I trying to find? Did I panic or explore? Where in life am I between maps?",
    relatedSlugs: ["house-dream-meaning", "ocean", "how-to-remember-dreams", "dream-journaling"],
    keywords: ["lost", "confusion", "direction", "transition", "searching"],
  }),
  buildDreamMeaning({
    slug: "spider-dream-meaning",
    title: "Spider Dream Meaning",
    symbol: "Spiders",
    situation: "Dreaming about spiders",
    description:
      "Understand what spider dreams mean — patience, entanglement, creativity, and control. Includes spider web symbolism, being crawled on, and how to reflect on this intense dream symbol.",
    emotionalTheme: "patience, entanglement, creativity, control, or quiet fear",
    spiritualTheme: "weaving, destiny, feminine power, craft, and the patterns that hold life together",
    variations:
      "A spider web may suggest a pattern, relationship, or obligation that feels intricate. A spider crawling on you can point to discomfort with closeness or control. A calm spider may symbolize patience, creativity, and careful construction.",
    prompts:
      "Ask yourself: What am I weaving? Where do I feel trapped? Is the dream asking me to slow down and notice a pattern?",
    relatedSlugs: ["cats", "mirrors", "jungian-dream-analysis", "recurring-dreams-and-patterns"],
    keywords: ["spider", "web", "pattern", "creativity", "fear"],
  }),
  buildDreamMeaning({
    slug: "baby-dream-meaning",
    title: "Baby Dream Meaning",
    symbol: "Babies",
    situation: "Dreaming about a baby",
    description:
      "What does dreaming about a baby mean? Babies in dreams often represent new beginnings, creative potential, vulnerability, or something fragile that needs care. A calm, reflective guide.",
    emotionalTheme: "new beginnings, vulnerability, creative potential, responsibility, or something fragile needing care",
    spiritualTheme: "innocence, pure potential, new chapters, and the parts of yourself still forming",
    variations:
      "Holding a healthy baby may suggest a new project, relationship, or part of the self that feels precious and tender. A crying baby can point to a need that has been neglected or a feeling that something new requires urgent attention. Forgetting or losing a baby may reflect anxiety about responsibility or fear of failing something important. Being a baby yourself can indicate regression, a desire for safety, or reconnecting with an earlier, simpler emotional state.",
    prompts:
      "Ask yourself: What new thing in my life feels fragile or precious right now? Am I carrying something I'm afraid to drop? What part of myself is just beginning?",
    uniqueSection: {
      heading: "When Baby Dreams Appear During Real Pregnancy Or Parenthood",
      body:
        "For people who are pregnant, trying to conceive, or newly parenting, baby dreams often carry direct emotional weight — processing anxiety, hope, fear, and love all at once. These dreams are rarely premonitions. They more often reflect the emotional reality of the experience: the enormous responsibility, the tenderness, the uncertainty, the love that doesn't yet have a name.\n\nIf you are not in any of these circumstances, the baby in your dream is usually symbolic. It may represent a creative project, a relationship, an aspect of your identity, or a part of your inner life that is vulnerable, unformed, and needs your attention without receiving it yet.",
    },
    relatedSlugs: ["pregnancy-dream-meaning", "why-we-dream", "dream-journaling", "recurring-nightmares"],
    keywords: ["baby dream meaning", "dream about baby", "baby in dream", "dreaming of a baby", "new baby dream"],
  }),
  buildDreamMeaning({
    slug: "wedding-dream-meaning",
    title: "Wedding Dream Meaning",
    symbol: "Weddings",
    situation: "Dreaming about a wedding",
    description:
      "What does dreaming about a wedding mean? Wedding dreams can reflect commitment, transition, union, anxiety about change, or the merging of two parts of yourself. A grounded interpretation guide.",
    emotionalTheme: "commitment, union, transition, anxiety about change, or two parts of life merging",
    spiritualTheme: "sacred union, integration, new chapters, and the binding of what has long been separate",
    variations:
      "Dreaming of your own wedding may reflect anticipation, anxiety, or excitement about a major life commitment — romantic or otherwise. Watching someone else's wedding can suggest feelings about transition, envy, admiration, or a chapter closing. A wedding going wrong often reflects anxiety about a commitment or change rather than a literal warning. Marrying a stranger can point to the integration of an unknown part of yourself, often a quality or capacity you have not fully accepted.",
    prompts:
      "Ask yourself: What in my life feels like it is binding or finalizing? Am I anxious about commitment, or ready for it? What two parts of my life are coming together — or resisting the merge?",
    uniqueSection: {
      heading: "Wedding Dreams Are Often Not About Romance",
      body:
        "Wedding dreams are one of the most commonly misread dream categories. People assume they are about their relationship status or romantic desires — and sometimes they are. But more often, the wedding in a dream represents any significant commitment or transition, not just marriage.\n\nA job change, a creative project, a decision to move, a shift in identity — all of these can produce wedding dreams because the emotional weight of commitment is similar. The dream uses the wedding as a symbol for the feeling of 'this is final, this changes everything' rather than referring specifically to a person.",
    },
    relatedSlugs: ["dream-about-ex", "flying-dream-meaning", "dream-journaling", "why-we-dream"],
    keywords: ["wedding dream meaning", "dream about wedding", "dreaming of getting married", "wedding dream", "marriage dream meaning"],
  }),
  buildDreamMeaning({
    slug: "money-dream-meaning",
    title: "Money Dream Meaning",
    symbol: "Money",
    situation: "Dreaming about money",
    description:
      "What does dreaming about money mean? Money in dreams often reflects self-worth, security, anxiety, power, or the fear of lack. Learn what finding, losing, or stealing money in a dream may reveal.",
    emotionalTheme: "self-worth, security, anxiety about scarcity, power dynamics, or unmet desires",
    spiritualTheme: "value, exchange, energy, abundance consciousness, and what you believe you deserve",
    variations:
      "Finding money in a dream may suggest unexpected opportunity, a rediscovered sense of value, or hope about a situation that felt scarce. Losing money can reflect anxiety about security, a fear of losing status, or a felt sense of depletion. Being given money may reflect receiving support, validation, or recognition that is wanted in waking life. Stealing or being stolen from often carries themes of fairness, betrayal, or the feeling that something rightfully yours has been taken.",
    prompts:
      "Ask yourself: Where in my life do I feel undervalued or insecure? What would having enough actually feel like? Am I dream-negotiating something — trying to balance what I give and what I receive?",
    uniqueSection: {
      heading: "Money In Dreams Is Rarely About Money",
      body:
        "Money in a dream is almost always a proxy for something else: self-worth, security, power, time, energy, or the emotional exchange at the heart of a relationship. The specific form of the dream often points to what the real currency is.\n\nA dream about counting coins may reflect careful management of a limited emotional resource. A dream about large sums — sudden wealth or crushing debt — may reflect dramatic swings in how valuable you feel. If you find yourself dreaming about money regularly, the most useful question is not 'will I be rich?' but 'what in my life do I most feel the lack of?'",
    },
    relatedSlugs: ["house-dream-meaning", "car-accident-dream-meaning", "being-chased-dream-meaning", "dream-journaling"],
    keywords: ["money dream meaning", "dream about money", "dreaming of money", "finding money dream", "losing money dream"],
  }),
  buildDreamMeaning({
    slug: "school-dream-meaning",
    title: "School Dream Meaning",
    symbol: "School",
    situation: "Dreaming about school",
    description:
      "What does dreaming about school mean? School dreams — especially being unprepared for a test — are among the most universal adult dreams. Learn what anxiety, evaluation, and performance mean in this context.",
    emotionalTheme: "performance anxiety, evaluation, unfinished learning, fear of judgment, or a feeling of being tested",
    spiritualTheme: "lessons the soul is still learning, growth through challenge, and the cycles of mastery",
    variations:
      "Being unprepared for a test or exam is one of the most common dreams in the world — reported by adults decades after leaving school. It usually reflects a current-life situation involving evaluation, performance pressure, or the fear of being found inadequate. Missing class or forgetting your schedule often reflects feeling behind, overwhelmed, or out of sync with expectations. Being back in school as an adult often represents a felt need to return to a time of growth, or a current situation that activates the same emotional dynamics as being a student.",
    prompts:
      "Ask yourself: Where in my life do I currently feel tested or evaluated? What do I fear being judged for? What lesson do I feel I missed — or am still trying to complete?",
    uniqueSection: {
      heading: "Why Adults Keep Dreaming About School",
      body:
        "School is one of the longest, most formative environments most people experience. For many years, it was the place where worth was measured in grades, where belonging was negotiated in hallways, and where failure had daily, visible consequences.\n\nThe brain often reaches back to that architecture — the school building, the classroom, the test — when a current-life situation activates a similar emotional structure. You may be 40 years old and nowhere near a classroom, but if something is making you feel evaluated, found wanting, or behind schedule, your dreaming mind may still use school as the most familiar stage for that feeling.",
    },
    relatedSlugs: ["being-chased-dream-meaning", "falling-dream-meaning", "nightmare-about-being-chased", "recurring-nightmares"],
    keywords: ["school dream meaning", "dream about school", "unprepared for test dream", "exam dream", "going back to school dream"],
  }),
  buildDreamMeaning({
    slug: "dog-dream-meaning",
    title: "Dog Dream Meaning",
    symbol: "Dogs",
    situation: "Dreaming about a dog",
    description:
      "What does dreaming about a dog mean? Dogs in dreams often symbolize loyalty, friendship, instinct, protection, or a relationship dynamic. Includes what an aggressive dog, lost dog, or deceased pet may mean.",
    emotionalTheme: "loyalty, companionship, trust, protection, instinct, or the bonds that feel most reliable",
    spiritualTheme: "guardianship, unconditional presence, guidance at thresholds, and the instinctual wisdom of the body",
    variations:
      "A friendly, playful dog often reflects a relationship or part of yourself that feels safe, loyal, and affectionate. An aggressive or biting dog may point to a loyalty that feels threatened, a trusted relationship that has turned, or suppressed instincts demanding attention. A lost or sick dog can reflect anxiety about a relationship or the fear of losing something — or someone — whose presence you rely on. Dreaming of a dog who has died is a common grief dream and usually reflects love, loss, and the wish to feel that presence once more.",
    prompts:
      "Ask yourself: What relationship in my life do I associate with loyalty and protection right now? Is there a trust that feels shaken? Am I neglecting something that needs my care?",
    uniqueSection: {
      heading: "Dreaming Of A Dog Who Has Died",
      body:
        "Dreams about dogs who have passed away are among the most emotionally vivid that people report. These are grief dreams, and they are normal. The bond between a person and their dog is often one of the purest forms of unconditional care they have known, and loss of that presence can surface in dreams for months or years.\n\nIf your dream features a dog who has died — especially if it felt peaceful, realistic, or unusually vivid — this is not a premonition or a sign. It is the mind and heart continuing to process a love that mattered. These dreams are often experienced as a gift: a brief return of something that was real, tender, and cannot be argued with.",
    },
    relatedSlugs: ["dogs", "cats", "snake-dream-meaning", "nightmares-about-loved-ones"],
    keywords: ["dog dream meaning", "dream about dog", "dreaming of dogs", "dog in dream", "deceased pet dream"],
  }),
  buildDreamMeaning({
    slug: "work-dream-meaning",
    title: "Work Dream Meaning",
    symbol: "work",
    situation: "Your job, workplace, colleagues, or work tasks appear in your dream",
    description: "Discover what work dreams reveal about professional anxiety, identity, purpose, authority, and your relationship to effort. Learn why these dreams are so common and what they signal about your current state.",
    quickAnswer: "Work dreams usually reflect your current relationship to your job, career anxiety, or questions about identity and purpose—not necessarily about literal work. The emotional tone reveals whether you're processing stress, ambition, conflict, or a shift in how you see yourself professionally.",
    emotionalTheme: "professional anxiety, purpose, identity tied to work, authority dynamics, competence, or the weight of responsibility",
    spiritualTheme: "right livelihood, the expression of your gifts in the world, your creative power, and the sacred work of becoming",
    variations: "Being fired or losing your job in a dream often reflects professional anxiety or fear of inadequacy—or sometimes the wish to escape. Being promoted or praised may reflect confidence or ambition emerging. Conflicts with coworkers or a boss usually echo current workplace tensions or unresolved power dynamics. Doing your job perfectly or feeling productive often reflects a sense of accomplishment or competence. Being unable to do your work—tools breaking, forgetting how—often points to feeling overwhelmed, unprepared, or doubting your abilities.",
    prompts: "Ask yourself: How secure do I feel in my current role? What professional anxiety am I carrying? Is my work aligned with my values? What part of my identity is tied to this job? Where do I feel unprepared or competent?",
    uniqueSection: {
      heading: "Work Dreams as Identity Dreams",
      body: "Work dreams are often less about the literal job and more about identity. When we spend a third of our lives at work, and when work is often the first thing people ask about, our job becomes intertwined with how we see ourselves. A dream about work failure may really be a dream about fearing you're not enough. A dream about success may reflect an emerging sense of capability. These dreams are tracking not just your professional life but your deepening sense of who you are in the world.",
    },
    relatedSlugs: ["money-dream-meaning", "house-dream-meaning", "school-dream-meaning", "nightmare-about-being-chased"],
    keywords: ["work dream meaning", "job dream", "workplace dream", "dream about work", "professional anxiety dream"],
  }),
  buildDreamMeaning({
    slug: "fire-dream-meaning",
    title: "Fire Dream Meaning",
    symbol: "Fire",
    situation: "Dreaming about fire",
    description:
      "What does fire in a dream mean? Fire can symbolize passion, destruction, transformation, anger, or purification. Learn what burning, wildfires, candles, and house fires may reveal in your dreams.",
    quickAnswer:
      "Fire dreams often reflect intense emotion, transformation, anger, passion, or destruction. Whether the fire feels threatening or beautiful usually tells you more than the fire itself — cleansing flames carry a different message from a wildfire out of control.",
    emotionalTheme: "passion, anger, transformation, destruction, purification, or intensity of feeling",
    spiritualTheme: "purification, illumination, the phoenix cycle, and the sacred energy of radical change",
    variations:
      "A controlled fire such as a campfire or candle may suggest warmth, focus, or intentional transformation. A wildfire or house fire can reflect urgency, loss of control, or an emotion that has grown beyond its container. Being burned may point to a painful consequence or a feeling of being harmed by something too close. Watching fire from a distance may suggest safe awareness of intensity in your life. Starting a fire yourself can reflect agency, anger, or the deliberate release of something.",
    prompts:
      "Ask yourself: What in my life feels like it is burning, intensifying, or clearing away? Is the fire something I started or something that found me? Where in life do I feel heat — passion, anger, urgency, or pressure?",
    uniqueSection: {
      heading: "Why Fire Dreams Can Feel Both Beautiful And Terrifying",
      body:
        "Fire is one of the few symbols that can feel like pure destruction and pure renewal at the same moment. In dreams, this duality often reflects an emotional state that contains both endings and beginnings at once — a relationship ending that also feels like freedom, a painful transformation that is also necessary, a rage that also carries a kind of clarity.\n\nIf the fire in your dream felt frightening, it may be showing you something you cannot yet face directly. If it felt beautiful or awe-inspiring, the dream may be acknowledging that something important is changing, even if change is uncomfortable.",
    },
    relatedSlugs: ["death-dream-meaning", "water-dream-meaning", "fire", "dream-symbols-and-emotions"],
    keywords: ["fire dream meaning", "dream about fire", "burning dream", "house fire dream", "wildfire dream"],
  }),
  buildDreamMeaning({
    slug: "ocean-dream-meaning",
    title: "Ocean Dream Meaning",
    symbol: "The ocean",
    situation: "Dreaming about the ocean",
    description:
      "What does the ocean mean in a dream? Ocean dreams reflect emotional depth, the unconscious mind, vastness, and feelings too large to fully contain. A calm guide to what the sea may be saying.",
    quickAnswer:
      "The ocean in a dream often represents the unconscious mind, emotional vastness, depth, and what lies beneath the surface of your awareness. The state of the water — calm, stormy, dark, or clear — usually reflects the emotional state the dream is pointing toward.",
    emotionalTheme: "emotional depth, vastness, the unconscious, overwhelm, peace, awe, or what lies beneath the surface",
    spiritualTheme: "the collective unconscious, eternity, surrender, and the mystery of what is too large for the mind to contain",
    variations:
      "A calm ocean often reflects emotional peace, clarity, or a feeling of being held by something vast. A stormy ocean can suggest overwhelming emotion, life turbulence, or feeling tossed by forces outside your control. Swimming comfortably in the ocean may point toward confidence with your emotional life. Drowning or being dragged under suggests overwhelm or a feeling that something is larger than you can manage. Standing at the shore often reflects a threshold: the awareness of depth without yet entering it.",
    prompts:
      "Ask yourself: Was I in the water or watching from the shore? Did the ocean feel safe or threatening? What emotion in my life right now feels too large, too deep, or too unknown to look at directly?",
    uniqueSection: {
      heading: "The Ocean as the Unconscious Mind",
      body:
        "The ocean appears so often in dreams about the inner life because it can hold more than any single feeling. It suggests depth that extends beyond what can be seen, movement that continues even when the surface appears still, and life that exists in layers you have not yet visited.\n\nWhen the ocean appears in a dream, it often marks a moment when the unconscious mind is making itself known — through awe, fear, longing, or the simple sense that you are standing at the edge of something much larger than your daily life. These dreams are rarely about literal water. They are usually about scale: something in you is larger than you have been treating it.",
    },
    relatedSlugs: ["water-dream-meaning", "drowning-dream-meaning", "ocean", "falling-dream-meaning"],
    keywords: ["ocean dream meaning", "dream about ocean", "sea dream", "dreaming of the ocean", "waves dream meaning"],
  }),
  buildDreamMeaning({
    slug: "forest-dream-meaning",
    title: "Forest Dream Meaning",
    symbol: "A forest",
    situation: "Dreaming about a forest",
    description:
      "What does a forest mean in a dream? Forest dreams often symbolize the unconscious mind, the unknown self, mystery, solitude, or a journey through something complex and uncharted.",
    quickAnswer:
      "A forest in a dream often represents the unconscious mind, the parts of yourself not yet fully known, mystery, or the feeling of moving through something complex without a clear path. Whether the forest feels welcoming or threatening usually reflects your relationship to the unknown.",
    emotionalTheme: "mystery, the unknown self, solitude, being lost, inner wilderness, or complexity without a clear path",
    spiritualTheme: "the inner wildness, the journey of individuation, ancestral memory, and the sacred space between known and unknown",
    variations:
      "A dark or dense forest can suggest feeling lost, overwhelmed by complexity, or confronting parts of the self that have not yet been explored. A beautiful, light-filled forest may reflect solitude, peace, or trust in your own inner guidance. Being chased through a forest intensifies the sense of running from something unresolved. Finding a path or clearing suggests the beginning of clarity or direction within a complex situation. Animals in the forest often appear as symbolic guides, instincts, or shadow aspects of the dreamer.",
    prompts:
      "Ask yourself: Was I lost or exploring? Did the forest feel threatening or beautiful? What in my life feels complex, uncharted, or full of things I have not yet named?",
    uniqueSection: {
      heading: "Forests as the Territory of the Inner Self",
      body:
        "In many dream traditions and myths, the forest is the place where the ordinary world ends and the inner world begins. It is where the familiar gives way to instinct, where the path disappears and the self must navigate by feel rather than by map.\n\nForest dreams often appear during periods of significant inner exploration: therapy, grief, major transition, or any time life becomes more complex than your current map can explain. Rather than treating the forest as danger, consider that it may be an invitation — to move through something unknown, to trust your instincts, and to find out what you discover on the other side.",
    },
    relatedSlugs: ["being-chased-dream-meaning", "lost-dream-meaning", "water-dream-meaning", "jungian-dream-analysis"],
    keywords: ["forest dream meaning", "dream about forest", "woods dream", "lost in forest dream", "dark forest dream"],
  }),
  buildDreamMeaning({
    slug: "car-dream-meaning",
    title: "Car Dream Meaning",
    symbol: "A car",
    situation: "Dreaming about a car",
    description:
      "What does a car mean in a dream? Cars in dreams often reflect direction, control, drive, and autonomy. Learn what driving, being a passenger, or losing control of a car may reveal about your waking life.",
    quickAnswer:
      "A car in a dream often represents direction, personal drive, control, and autonomy — the vehicle through which you move through life. Whether you are driving, a passenger, or watching from outside usually reveals how much agency you feel right now.",
    emotionalTheme: "direction, control, personal drive, autonomy, or a life path that feels stable, uncertain, or too fast",
    spiritualTheme: "the vehicle of the self, personal will, the journey of becoming, and movement toward what matters",
    variations:
      "Driving confidently may reflect a sense of direction and purpose. Losing control of the car can suggest feeling overwhelmed, that something in life is moving too fast, or that a situation has outpaced your ability to manage it. Being a passenger — especially in the back seat — often reflects giving control to someone else or feeling carried by circumstances. A car breaking down may signal exhaustion, a stalled direction, or the need to pause before continuing. Driving in reverse can suggest looking backward, reconsidering, or feeling unable to move forward.",
    prompts:
      "Ask yourself: Who was driving? Did I feel in control? Where was I going, and did the destination feel right? What in my waking life is moving too fast, too slow, or in the wrong direction?",
    uniqueSection: {
      heading: "Whose Hands Are on the Wheel",
      body:
        "The most revealing detail in a car dream is often not the car itself but who is driving. If you are behind the wheel, the dream may be asking about your sense of agency and direction. If someone else is driving, the dream may reflect a relationship, a situation, or a belief system that is currently steering your life more than you are.\n\nThis is not always about control in the rigid sense. Sometimes being a passenger in a dream reflects healthy trust. But if the ride felt uncomfortable, too fast, or headed somewhere you didn't want to go, the dream may be inviting you to consider where you have given your autonomy away.",
    },
    relatedSlugs: ["car-accident-dream-meaning", "lost-dream-meaning", "flying-dream-meaning", "being-chased-dream-meaning"],
    keywords: ["car dream meaning", "dream about car", "driving dream", "car breaking down dream", "car out of control dream"],
  }),
  buildDreamMeaning({
    slug: "hospital-dream-meaning",
    title: "Hospital Dream Meaning",
    symbol: "A hospital",
    situation: "Dreaming about a hospital",
    description:
      "What does a hospital in a dream mean? Hospital dreams often reflect healing, vulnerability, health anxiety, recovery, or a part of your life in need of care and attention.",
    quickAnswer:
      "Hospital dreams often point toward healing, vulnerability, health anxiety, or a part of your inner life that needs attention and care. The emotional tone — whether the hospital feels safe or frightening — usually reveals whether the dream is about receiving help or fearing what needs to be addressed.",
    emotionalTheme: "healing, vulnerability, health anxiety, recovery, care, or something in need of urgent attention",
    spiritualTheme: "the sacred act of healing, wholeness, surrender to care, and the humility of needing help",
    variations:
      "Being a patient may reflect vulnerability, the need for care, or a part of your life that requires healing attention. Visiting someone in a hospital can suggest concern about a relationship or the projection of your own need for care onto another. Working in a hospital may reflect a caretaking role in waking life, the weight of responsibility, or the emotional labor of holding others' difficulty. An empty or abandoned hospital can suggest grief, the absence of expected care, or anxiety about what goes unaddressed.",
    prompts:
      "Ask yourself: Was I the patient or the caretaker? Did the hospital feel safe or frightening? What part of my life — physical, emotional, or relational — currently feels like it needs care I have not given it?",
    uniqueSection: {
      heading: "Hospital Dreams Are Often About Emotional Healing",
      body:
        "Hospital dreams are rarely only about physical health. Because hospitals are the places we associate with our most vulnerable moments, they become powerful symbols for any kind of healing the self is trying to do — emotional repair, the aftermath of loss, the slow work of recovering from something painful, or the need to finally address something that has been avoided.\n\nIf the hospital in your dream felt frightening, it may reflect an avoidance of something that needs attention. If it felt like a place of genuine care, the dream may be acknowledging that healing is possible — and that you may already be in the middle of it.",
    },
    relatedSlugs: ["death-dream-meaning", "baby-dream-meaning", "water-dream-meaning", "nightmare-about-dying"],
    keywords: ["hospital dream meaning", "dream about hospital", "being sick in a dream", "medical dream", "healing dream"],
  }),
];
