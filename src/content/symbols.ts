import type { SEOContentItem } from "./types";

const lastUpdated = "2026-05-10";

type SymbolSeed = {
  slug: string;
  title: string;
  essence: string;
  psychologicalMeaning: string;
  emotionalContext: string;
  commonVariations: string;
  commonContexts: string;
  deeperInsight?: {
    heading: string;
    body: string;
  };
  extraFaqs?: SEOContentItem["faqs"];
  relatedSlugs: string[];
  keywords: string[];
};

function buildSymbol(seed: SymbolSeed): SEOContentItem {
  return {
    slug: seed.slug,
    title: `${seed.title} Dream Symbol | DreamTherapy`,
    description: `Explore the dream symbol of ${seed.title.toLowerCase()} — emotional meaning, psychological patterns, common variations, and reflective interpretation.`,
    h1: `${seed.title} Dream Symbol`,
    quickAnswer: `${seed.title} in dreams may symbolize ${seed.essence}. Its meaning becomes clearer when you notice the emotional tone, context, and whether the symbol felt threatening, protective, or strangely familiar.`,
    sections: [
      {
        heading: "Symbolic Meaning",
        body: `${seed.title} often works as a compressed image for ${seed.essence}. Dream symbols are rarely one-to-one definitions. They behave more like emotional containers, gathering memory, mood, instinct, and association into a single image that the waking mind can revisit.\n\nThat is why two people can dream about the same symbol and come away with different meanings. The symbol is shared, but the inner context is personal. What the symbol means depends on your relationship to it, what happened in the dream, and what has been moving in your waking life.`,
      },
      {
        heading: "Emotional Context",
        body: `${seed.emotionalContext}`,
      },
      {
        heading: "Psychological Meaning",
        body: `${seed.psychologicalMeaning}`,
      },
      {
        heading: "Common Variations",
        body: `${seed.commonVariations}`,
      },
      {
        heading: "When This Symbol Often Appears",
        body: `${seed.commonContexts}`,
      },
      {
        heading: "How This Symbol Often Appears in Dreams",
        body: `${seed.title} may appear in dreams as a background presence, a sudden interruption, a guide, a warning, or a recurring motif. The role it plays matters. A symbol that quietly observes you may mean something different from a symbol that blocks your path, asks for attention, or transforms mid-dream.\n\nIf the same symbol appears in several dreams, track not only the symbol itself but also what changes around it. Repetition often reveals a theme before it reveals an answer.`,
      },
      {
        heading: "How To Journal This Symbol",
        body: `When ${seed.title.toLowerCase()} appears in your dream, write down where it appeared, what changed around it, and what you felt in your body. Then ask what in your current life carries a similar emotional texture. The goal is not to decode the dream perfectly, but to understand what it might be helping you notice.\n\nA useful reflection question is: if this symbol could speak in plain language, what feeling or concern would it be carrying for me right now?`,
      },
      {
        heading: "Deepening Your Reflection",
        body: `Over time, dreams with this symbol may reveal patterns. Does it appear during certain life transitions? Does it feel more protective or threatening as your situation changes? Does the symbol's appearance shift from scary to familiar? These changes can be as meaningful as the symbol itself.\n\nTreat the symbol as an invitation to understand yourself better, not as a fixed definition that applies to everyone.`,
      },
      ...(seed.deeperInsight ? [seed.deeperInsight] : []),
    ],
    faqs: [
      {
        question: `Is ${seed.title.toLowerCase()} always a good or bad dream symbol?`,
        answer: `No. Most dream symbols are contextual. The same image can feel protective in one dream and unsettling in another. The emotional tone of the dream and what was happening around it matter far more than the symbol in isolation.`,
      },
      {
        question: "Can a symbol mean something different for me personally?",
        answer:
          "Absolutely. Personal memory, culture, relationships, and recent experience completely change what a dream symbol means. That's why dream interpretation works best when it's grounded in your actual life rather than a universal dictionary.",
      },
      {
        question: "What should I write down when this symbol appears?",
        answer:
          "Record the setting, your emotional reaction, whether the symbol moved or changed, and what was happening in your life around the time of the dream. Also note if this is a recurring appearance and whether the feeling or tone has shifted.",
      },
      {
        question: "Why does this symbol keep returning in my dreams?",
        answer:
          "A recurring symbol often points to an emotional pattern, life transition, or theme that your mind wants to keep exploring. The repetition itself is meaningful. Compare several appearances to see what stays the same and what changes.",
      },
      ...(seed.extraFaqs ?? []),
    ],
    relatedSlugs: seed.relatedSlugs,
    keywords: seed.keywords,
    lastUpdated,
  };
}

export const symbols: SEOContentItem[] = [
  buildSymbol({
    slug: "water",
    title: "Water",
    essence: "emotion, intuition, cleansing, grief, and the unconscious",
    emotionalContext: "The emotional tone of water dreams often tells you how the emotion is behaving. Calm water may suggest integration or readiness. Turbulent water may suggest overwhelm, emotional flooding, or force. Still water may suggest reflection, rest, or stagnation. Moving water may suggest flow, change, or momentum. Notice whether the water felt welcoming or threatening, contained or overwhelming.",
    psychologicalMeaning: "Water in dreams often connects to the emotional body and the unconscious. It can represent feelings that are difficult to articulate directly, emotional transitions, intuition, or the need to process something that feels deep or mysterious. Water may also suggest cleansing, release, or the space between what is known and what remains hidden.",
    commonVariations: "Drowning in water can suggest emotional overwhelm or a feeling that something is pulling you under. Swimming smoothly may suggest ease and agency in emotional territory. Watching water from a distance may reflect emotional distance or observation. Being immersed in warm water often feels comforting, while cold water can feel shocking. Rising water can point toward increasing emotional pressure.",
    commonContexts: "Water dreams often appear during emotional transitions, grief, periods of deep change, or when you are processing feelings that feel too large for words. They may also appear when intuition is trying to surface something, when you need to let go of control, or when emotional territory feels vast and unknowable.",
    deeperInsight: {
      heading: "Why Water Dreams Carry Such Presence",
      body: "Water dreams often stay with people because water is both fluid and powerful. It can be gentle and destructive, life-giving and overwhelming. That duality is part of why water appears so frequently in dreams. It can mirror the emotional life — sometimes still and reflective, sometimes surging and demanding.",
    },
    relatedSlugs: ["water-dream-meaning", "drowning-dream-meaning", "ocean"],
    keywords: ["water", "emotion", "intuition", "cleansing", "unconscious"],
  }),
  buildSymbol({
    slug: "fire",
    title: "Fire",
    essence: "transformation, anger, energy, destruction, and purification",
    emotionalContext: "Fire in a dream can feel urgent, powerful, dangerous, or liberating depending on the emotional tone. A controlled fire may suggest useful transformation or creative energy. An uncontrolled fire may suggest overwhelm, anger you cannot contain, or a situation spiraling out of hand. Notice whether you felt fear, excitement, respect, or fascination when facing the fire.",
    psychologicalMeaning: "Fire in dreams can represent transformation, passion, anger, creative energy, or destruction. It may suggest something in your life that needs burning away, a desire or emotion that feels hot and demanding, or a need to purify and begin again. Fire can also represent purification, liberation, or the energy required for real change.",
    commonVariations: "A small flame may suggest a spark of idea or beginning change. A raging fire may suggest overwhelming passion, anger, or change that feels out of control. Being burned can reflect pain during transformation or feeling harmed by change. Starting a fire can suggest agency and intentional change. Controlling a fire can represent mastery or the ability to channel intense energy.",
    commonContexts: "Fire dreams often appear during periods of major life change, when anger or passion feels especially present, during creative breakthroughs, or when something in your life is being destroyed or transformed. They may also reflect times when you feel energized, activated, or ready for a significant shift.",
    relatedSlugs: ["snake-dream-meaning", "being-chased-dream-meaning", "nightmares-stress-and-reflection"],
    keywords: ["fire", "transformation", "change", "energy", "anger"],
  }),
  buildSymbol({
    slug: "snakes",
    title: "Snakes",
    essence: "instinct, transformation, shadow work, healing, and power",
    emotionalContext: "Snakes carry dual emotional weight. They can feel frightening because they are powerful and move in ways we cannot predict. They can also feel wise, healing, and beautiful. A peaceful snake may suggest integration of a powerful instinct or shadow quality. A threatening snake may suggest fear of your own power or a situation you do not yet trust.",
    psychologicalMeaning: "Snakes in dreams often connect to shadow material, instinct, transformation, and the primal parts of ourselves that civilized life asks us to manage. They may represent sexuality, aggression, wisdom, healing (snakes are symbols of medicine), or parts of yourself that feel powerful but not fully understood. Snakes can also symbolize threat, caution, or the need to shed an old skin.",
    commonVariations: "A snake biting suggests a sharp realization, boundary violation, or emotion you can no longer avoid. A snake shedding skin symbolizes transformation and release. Many snakes may suggest overwhelm or an environment that feels unsafe. A calm snake may symbolize wisdom, healing, or integration. A snake in water can intensify the emotional meaning.",
    commonContexts: "Snake dreams often appear during identity transitions, when you are developing new power or agency, during shadow work, when instinct is trying to surface, or when you are integrating qualities you once rejected or feared.",
    deeperInsight: {
      heading: "Why Snake Dreams Feel So Charged",
      body: "Snake dreams often feel memorable because the symbol carries tension in both directions. Snakes can suggest danger, but they can also suggest healing, rebirth, sexuality, and the pressure of rapid change. That symbolic duality is part of why snake dreams stay with people. The dream may be less about threat than about energy that has not found language yet.",
    },
    relatedSlugs: ["snake-dream-meaning", "jungian-dream-analysis", "what-dreams-may-mean"],
    keywords: ["snakes", "transformation", "shadow", "instinct", "healing"],
  }),
  buildSymbol({
    slug: "teeth",
    title: "Teeth",
    essence: "voice, confidence, appearance, vulnerability, and control",
    emotionalContext: "Teeth dreams can feel bodily and immediate, which is part of why they are often remembered with anxiety. They can touch appearance, identity, power, and vulnerability quickly. A dream where teeth feel solid may suggest confidence. A dream where teeth feel fragile or threatened may suggest exposure, insecurity, or feeling suddenly less defended.",
    psychologicalMeaning: "Teeth in dreams can connect to voice, power, communication, appearance, aging, control, and vulnerability. They may represent confidence, attractiveness, or the ability to bite and assert yourself. Losing teeth can suggest a fear of losing control, aging, communication breaking down, or feeling exposed. Teeth can also represent the anxiety of visibility and the fear of not being seen as you wish to be seen.",
    commonVariations: "Teeth falling out can feel panicky or slow. Teeth crumbling may reflect exhaustion. Pulling out your own teeth can suggest agency mixed with discomfort. Spitting out teeth often points toward panic or embarrassment. Looking in a mirror after losing teeth may connect the dream to identity and appearance.",
    commonContexts: "Teeth dreams often appear during identity transitions, when communication feels risky, during periods of heightened self-consciousness, when you are aging or aware of aging, or when confidence feels unstable.",
    relatedSlugs: ["teeth-falling-out-dream-meaning", "mirrors", "dream-symbols-and-emotions"],
    keywords: ["teeth", "confidence", "voice", "vulnerability", "appearance"],
  }),
  buildSymbol({
    slug: "houses",
    title: "Houses",
    essence: "selfhood, memory, safety, family systems, and inner structure",
    emotionalContext: "A dream house's emotional tone often reflects your sense of safety, familiarity, or comfort within yourself. A beautiful house may suggest integration and a sense of inner security. A threatening or chaotic house may suggest inner turbulence or parts of yourself that feel disorganized or unsafe. The condition of the house often mirrors your inner state.",
    psychologicalMeaning: "Houses in dreams often represent the self or inner life. Rooms represent different aspects of self or different life domains. A basement may suggest the unconscious. An attic may suggest higher consciousness or memory. The overall condition and feel of the house reflects your sense of inner security, structure, and belonging. Houses can also represent family systems and the patterns you grew up with.",
    commonVariations: "A childhood home often brings memory and family patterns into the dream. An unfamiliar house can suggest parts of yourself you are still discovering. A house with many rooms suggests complexity and inner depth. Exploring new rooms can suggest expanding self-knowledge. A house that is damaged, flooded, or chaotic can suggest inner turbulence.",
    commonContexts: "House dreams often appear during identity exploration, family transitions, when you are working with childhood patterns, during relocation or major change, or when you are developing a deeper sense of self.",
    deeperInsight: {
      heading: "The House As Inner Home",
      body: "House dreams are powerful because they represent not just a physical space but your inner home — your sense of belonging within yourself. When a house dream disturbs you, it is often because something in your inner structure feels unsafe, unknown, or in need of attention. The dream is inviting you to explore and stabilize your inner home.",
    },
    relatedSlugs: ["house-dream-meaning", "lost-dream-meaning", "mirrors"],
    keywords: ["house", "self", "home", "memory", "family"],
  }),
  buildSymbol({
    slug: "mirrors",
    title: "Mirrors",
    essence: "identity, self-perception, honesty, projection, and recognition",
    emotionalContext: "Mirror dreams often touch on self-image and identity. Seeing yourself clearly in a mirror may suggest self-recognition and honesty. Seeing a distorted image may suggest confusion about identity or fear of not being recognized as you wish to be. Avoiding a mirror may suggest shame, denial, or not wanting to face something about yourself.",
    psychologicalMeaning: "Mirrors in dreams connect to identity, self-perception, honesty, and the way you see yourself versus the way others may see you. They can suggest self-recognition, the search for your true face, or anxieties about appearance and identity. Mirrors may also represent projection — the ways you see parts of yourself in other people rather than acknowledging them in yourself.",
    commonVariations: "A clear mirror often suggests clarity and self-recognition. A cracked or distorted mirror can suggest fragmented identity or distorted self-image. A mirror showing a different face can suggest confusion about identity or multiple versions of self. Breaking a mirror can suggest shattering illusions about yourself.",
    commonContexts: "Mirror dreams often appear during identity transitions, periods of self-doubt, when you are questioning how you are perceived, during beauty or appearance anxiety, or when you are working with self-image.",
    relatedSlugs: ["teeth-falling-out-dream-meaning", "dream-about-ex", "jungian-dream-analysis"],
    keywords: ["mirror", "identity", "self-image", "honesty", "reflection"],
  }),
  buildSymbol({
    slug: "ocean",
    title: "Ocean",
    essence: "vastness, mystery, awe, depth, grief, and the unconscious",
    emotionalContext: "Ocean dreams often evoke awe, mystery, or vastness. The emotional tone matters greatly. A calm ocean may suggest peace, spiritual depth, or wonder. Rough waves may suggest emotional turbulence or feeling overwhelmed by something vast. Looking at the ocean from shore may suggest observing something you cannot yet fully enter.",
    psychologicalMeaning: "The ocean represents vastness, mystery, depth, and the unconscious that cannot be fully known. It can suggest infinite possibility, the depths of emotion, or parts of yourself that are mysterious even to you. Ocean dreams often touch on awe, wonder, grief, and the humbling realization that some things are bigger than ourselves.",
    commonVariations: "A calm ocean may suggest peace or spiritual depth. Rough waves may suggest emotional overwhelm or turbulence. Drowning in ocean suggests being pulled under by forces larger than yourself. Sailing smoothly suggests moving through vast territory with agency. Staring at the horizon suggests longing or perspective shift.",
    commonContexts: "Ocean dreams often appear during spiritual seeking, grief, when you are facing something larger than yourself, during periods of awe or perspective shift, or when you are exploring the vastness of your own inner landscape.",
    relatedSlugs: ["water-dream-meaning", "drowning-dream-meaning", "falling-dream-meaning"],
    keywords: ["ocean", "vastness", "mystery", "depth", "unconscious"],
  }),
  buildSymbol({
    slug: "dogs",
    title: "Dogs",
    essence: "loyalty, protection, instinct, companionship, and trust",
    emotionalContext: "Dogs in dreams often feel emotional because they mirror loyalty and protection. A friendly dog may suggest trustworthiness, protection, or loyal companionship. A threatening dog may suggest something instinctual that feels dangerous or a relationship where loyalty feels insecure. The emotional tone matters greatly.",
    psychologicalMeaning: "Dogs in dreams often represent loyalty, protection, instinct, and companionship. They can suggest parts of yourself that are protective, intuitive, or devoted. Dogs may also represent actual relationships or your need for loyal companionship. Threatening dogs can suggest instinct you do not yet trust or a protective part of yourself that feels aggressive.",
    commonVariations: "A friendly dog beside you often suggests protection or loyal companionship. A dog chasing you can suggest pressure, instinct, or a part of yourself pursuing you. A wounded dog may suggest hurt instinct or betrayed loyalty. A pack of dogs can suggest overwhelming instinct or social pressure.",
    commonContexts: "Dog dreams often appear when you are exploring trust in relationships, developing your own protective instinct, working with loyalty patterns, or when companionship is significant.",
    relatedSlugs: ["being-chased-dream-meaning", "cats", "dream-symbols-and-emotions"],
    keywords: ["dogs", "loyalty", "protection", "trust", "instinct"],
  }),
  buildSymbol({
    slug: "cats",
    title: "Cats",
    essence: "independence, intuition, mystery, boundaries, and quiet sensitivity",
    emotionalContext: "Cats in dreams often feel subtle because they represent independence and mystery. A calm cat may suggest quiet intuition or comfortable independence. A threatening cat may suggest something mysterious and boundary-respecting, or a part of yourself that is withdrawn. Cats rarely show their feelings, which mirrors their dream nature.",
    psychologicalMeaning: "Cats in dreams often represent independence, intuition, mystery, boundaries, and quiet sensitivity. They can suggest parts of yourself that are self-sufficient, intuitive, or hard to read. Cats may also represent actual pets or your need for independence within closeness. Cats respect boundaries and often dream-cats symbolize that quality.",
    commonVariations: "A friendly, affectionate cat often suggests ease with independence and intuition. A mysterious cat may suggest hidden knowledge or parts of yourself you do not fully know. A cat that ignores you can suggest boundaries or emotional distance. Multiple cats can suggest intuitive complexity.",
    commonContexts: "Cat dreams often appear when you are developing independence, trusting your intuition, setting boundaries in relationships, or when you are exploring the parts of yourself that are mysterious even to you.",
    relatedSlugs: ["spider-dream-meaning", "dogs", "mirrors"],
    keywords: ["cats", "independence", "intuition", "mystery", "boundaries"],
  }),
  buildSymbol({
    slug: "birds",
    title: "Birds",
    essence: "freedom, messages, perspective, spirit, and release",
    emotionalContext: "Birds in dreams often feel aspirational or liberating. Flying birds may suggest freedom, rising above, or a shift in perspective. Caged birds may suggest restriction or longing for freedom. Birds delivering messages may suggest communication or guidance. The emotional tone often involves aspiration or elevation.",
    psychologicalMeaning: "Birds in dreams often represent freedom, perspective, messages, spirit, and the ability to rise above a situation. They can suggest transcendence, liberation, or the wish to see things from a higher vantage point. Birds may also carry messages or represent communication. They can suggest aspiration and the desire to break free from limitation.",
    commonVariations: "A bird flying freely often suggests freedom or perspective shift. A caged bird can suggest feeling trapped or longing for liberation. A bird landing near you can suggest grounding of a spiritual insight. Many birds can suggest abundance or a message too large to ignore. A bird bringing something can suggest receiving guidance.",
    commonContexts: "Bird dreams often appear when you are seeking freedom or perspective, during spiritual seeking, when you wish to transcend a situation, when important communication is trying to surface, or when you are ready for expansion.",
    relatedSlugs: ["flying-dream-meaning", "death-dream-meaning", "pregnancy-dream-meaning"],
    keywords: ["birds", "freedom", "perspective", "spirit", "release"],
  }),
];
