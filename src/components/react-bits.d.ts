declare module "@/components/ShinyText" {
  type ShinyTextProps = {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    color?: string;
    shineColor?: string;
    spread?: number;
    yoyo?: boolean;
    pauseOnHover?: boolean;
    direction?: "left" | "right";
    delay?: number;
  };

  export default function ShinyText(props: ShinyTextProps): JSX.Element;
}

declare module "@/components/TextType" {
  type TextTypeProps = {
    text: string | string[];
    as?: keyof JSX.IntrinsicElements;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    loop?: boolean;
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string;
    cursorClassName?: string;
    cursorBlinkDuration?: number;
    textColors?: string[];
    variableSpeed?: { min: number; max: number };
    onSentenceComplete?: (text: string, index: number) => void;
    startOnVisible?: boolean;
    reverseMode?: boolean;
  };

  export default function TextType(props: TextTypeProps): JSX.Element;
}

declare module "@/components/FadeContent" {
  import type { CSSProperties, ReactNode } from "react";

  type FadeContentProps = {
    children: ReactNode;
    container?: string | Element | null;
    blur?: boolean;
    duration?: number;
    ease?: string;
    delay?: number;
    threshold?: number;
    initialOpacity?: number;
    disappearAfter?: number;
    disappearDuration?: number;
    disappearEase?: string;
    onComplete?: () => void;
    onDisappearanceComplete?: () => void;
    className?: string;
    style?: CSSProperties;
  };

  export default function FadeContent(props: FadeContentProps): JSX.Element;
}

declare module "@/components/SplitText" {
  type SplitTextProps = {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: "chars" | "words" | "lines" | "chars,words" | "words,lines" | "chars,words,lines";
    from?: Record<string, unknown>;
    to?: Record<string, unknown>;
    threshold?: number;
    rootMargin?: string;
    textAlign?: "left" | "center" | "right";
    tag?: keyof JSX.IntrinsicElements;
    onLetterAnimationComplete?: () => void;
  };

  export default function SplitText(props: SplitTextProps): JSX.Element;
}

declare module "@/components/GlareHover" {
  import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

  type GlareHoverProps = HTMLAttributes<HTMLDivElement> & {
    width?: string;
    height?: string;
    background?: string;
    borderRadius?: string;
    borderColor?: string;
    children: ReactNode;
    glareColor?: string;
    glareOpacity?: number;
    glareAngle?: number;
    glareSize?: number;
    transitionDuration?: number;
    playOnce?: boolean;
    className?: string;
    style?: CSSProperties;
  };

  export default function GlareHover(props: GlareHoverProps): JSX.Element;
}
