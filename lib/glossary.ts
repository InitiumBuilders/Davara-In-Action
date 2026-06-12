export interface GlossaryEntry {
  term: string;
  slug: string;
  definition: string;
}

const glossary: GlossaryEntry[] = [
  { term: "Quorum", slug: "quorum", definition: "The minimum set of approvals required for an action to proceed." },
  { term: "Signer", slug: "signer", definition: "An independent entity — human or AI — that reviews and votes on a proposed action." },
  { term: "m-of-n", slug: "m-of-n", definition: "A quorum rule: m approvals needed from n total signers." },
  { term: "Timelock", slug: "timelock", definition: "A mandatory delay between approval and execution." },
  { term: "Monoculture", slug: "monoculture", definition: "When many agents share the same base model, producing correlated failures." },
  { term: "Divergence", slug: "divergence", definition: "Deliberate difference between signers to prevent correlated failure." },
  { term: "Circuit breaker", slug: "circuit-breaker", definition: "A runtime interrupt that halts execution when internal activations enter harm manifolds." },
  { term: "Emergence", slug: "emergence", definition: "System-level behavior that no single component exhibits alone." },
  { term: "Feedback", slug: "feedback", definition: "When a system's output loops back to influence its input." },
  { term: "Leverage point", slug: "leverage-point", definition: "A place in a system where a small change produces large effects." },
  { term: "Threshold", slug: "threshold", definition: "The precise quorum rule — a vector spanning model family, org, mechanism class." },
  { term: "Kill switch", slug: "kill-switch", definition: "An emergency shutdown mechanism for an AI system." },
  { term: "Attractor", slug: "attractor", definition: "A state the system tends to settle into." },
  { term: "Action Contract", slug: "action-contract", definition: "A structured, signable proposal for every high-leverage AI action." },
  { term: "Constitution", slug: "constitution", definition: "A set of principles encoded as signer prompts that govern approval/rejection behavior." },
  { term: "Antifragile", slug: "antifragile", definition: "A system that gets stronger under stress, not just resilient." },
  { term: "Stress-as-Signal", slug: "stress-as-signal", definition: "The principle that adversarial probes and dissent feed protocol evolution." },
  { term: "Council", slug: "council", definition: "Tier 3 elected masternode operators serving as human-quorum signers." },
];

export function getGlossaryEntry(term: string): GlossaryEntry | undefined {
  return glossary.find(
    (g) => g.term.toLowerCase() === term.toLowerCase() || g.slug === term.toLowerCase()
  );
}

export default glossary;
