// Wraps a screenshot in a subtle browser-window chrome so shots read as
// intentional product shots rather than raw images.
const BrowserFrame = ({ src, alt, url = '', className = '', imgClassName = '', priority = false }) => {
    return (
        <div className={`overflow-hidden rounded-xl border border-line2 bg-surface2 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] ${className}`}>
            {/* Top chrome bar */}
            <div className="flex items-center gap-2 px-3.5 h-9 border-b border-line bg-bg2/70">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                {url && (
                    <div className="ml-2 hidden sm:flex items-center min-w-0 flex-1">
                        <span className="truncate w-full text-center font-mono text-[11px] text-faint bg-surface2 border border-line rounded-md px-2 py-0.5">
                            {url}
                        </span>
                    </div>
                )}
            </div>
            {/* Screenshot */}
            <div className="relative overflow-hidden bg-surface2">
                <img
                    src={src}
                    alt={alt}
                    loading={priority ? 'eager' : 'lazy'}
                    className={`w-full h-full object-cover object-top ${imgClassName}`}
                />
            </div>
        </div>
    );
};

export default BrowserFrame;
