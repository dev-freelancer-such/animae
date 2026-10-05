import { useEffect, useMemo, useState } from "react";

import { ApiVipCard, ApiVipTiers } from "@/models/api.models";

import { getVipTiers } from "@/services/requests/stories";

import { Image } from "@/components/ui";

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="size-[65%] text-[#bbb]"
  >
    <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z" />
  </svg>
);

function progressPercent(cards: ApiVipCard[], level: number) {
  if (cards.length < 2) return 0;
  const index = cards.findIndex(
    card => level >= card.minVipLevel && level <= card.maxVipLevel
  );
  const current = index >= 0 ? index : 0;
  const card = cards[current];
  const span = Math.max(card.maxVipLevel - card.minVipLevel, 1);
  const inner = Math.min(
    1,
    Math.max(0, (level - card.minVipLevel) / span)
  );
  return ((current + inner) / (cards.length - 1)) * 100;
}

export default function VipTiers({ vipLevel = 0 }: { vipLevel?: number }) {
  const [tiers, setTiers] = useState<ApiVipTiers | null>(null);

  useEffect(() => {
    getVipTiers()
      .then(data => setTiers(data))
      .catch(() => setTiers(null));
  }, []);

  const cards = useMemo(
    () =>
      [...(tiers?.cards ?? [])].sort((a, b) => a.sortOrder - b.sortOrder),
    [tiers]
  );

  if (!tiers?.enabled || cards.length === 0) return null;

  const fill = progressPercent(cards, vipLevel);
  const inset = `${100 / (cards.length * 2)}%`;

  return (
    <section className="overflow-x-auto">
      <div className="px-[clamp(8px,0.8vw,14px)] py-[clamp(8px,0.6vw,12px)]">
        <div className="flex min-w-[500px] justify-between gap-[15px]">
          {cards.map(card => {
            const current =
              vipLevel >= card.minVipLevel && vipLevel <= card.maxVipLevel;
            const unlocked = vipLevel >= card.minVipLevel;

            return (
              <div
                key={card.code}
                className="flex min-w-0 flex-1 flex-col items-center gap-[clamp(6px,0.417vw,8px)]"
              >
                <div className="flex h-[20px] items-center justify-center" />
                <div
                  className={`w-full transition-all duration-200 ${
                    current
                      ? "animate-vip-current-scale drop-shadow-lg"
                      : unlocked
                        ? ""
                        : "opacity-50 grayscale"
                  }`}
                >
                  <div className="relative w-full overflow-hidden rounded-xl">
                    <Image
                      alt={card.name}
                      src={card.imageUrl}
                      width={120}
                      height={160}
                      className="h-auto w-full object-cover"
                    />
                    {current && (
                      <div className="animate-vip-shine-ud pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_20%,rgba(255,255,255,0.45)_50%,transparent_80%)]" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-2 min-w-[500px]">
          <div
            className="pointer-events-none absolute top-1/2 h-[5px] -translate-y-1/2 overflow-hidden rounded-full bg-[#d4c5a9]/30"
            style={{ left: `calc(${inset} - 6px)`, right: `calc(${inset} - 6px)` }}
          >
            <div
              className="absolute top-0 left-0 h-full rounded-full animate-vip-progress"
              style={{
                width: `${Math.max(fill, 8)}%`,
                backgroundSize: "200% 100%",
                backgroundImage:
                  "linear-gradient(90deg, rgb(200, 144, 42) 0%, rgb(245, 210, 122) 40%, rgb(255, 233, 160) 55%, rgb(245, 210, 122) 70%, rgb(200, 144, 42) 100%)",
              }}
            />
          </div>
          <div className="flex justify-between gap-[15px]">
            {cards.map(card => {
              const reached = vipLevel >= card.minVipLevel;
              return (
                <div
                  key={`${card.code}-node`}
                  className="relative z-10 flex flex-1 items-center justify-center py-1"
                >
                  {reached ? (
                    <div className="flex size-[clamp(14px,1.2vw,22px)] items-center justify-center rounded-full bg-[linear-gradient(135deg,#f5d27a,#c8902a)] animate-vip-node-pulse">
                      <span className="text-[clamp(7px,0.625vw,10px)] leading-none font-black text-white drop-shadow-sm">
                        {card.minVipLevel}
                      </span>
                    </div>
                  ) : (
                    <div className="flex size-[clamp(14px,1.2vw,22px)] items-center justify-center rounded-full border border-[#d4c5a9]/40 bg-[#e8e8e8]">
                      <LockIcon />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
