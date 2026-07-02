import matplotlib.pyplot as plt
import numpy as np
import sys

# Data from the image
plugins = [
    "Completion Progress", "Configurable Reports", "Level Up XP",
    "Sharing Cart", "Course dedication", "Microsoft Block", "Attendance",
    "AI Chat Block", "Grade Me", "Checklist", "Quickmail", "Stash",
    "Analytics graphs", "PlayerHUD", "AI Chat", "Exabis E-Portfolio",
    "Turnitin", "Filtered course list", "ReadSpeaker for Moodle", "Mass Actions block"
]

downloads = [
    12400, 11500, 9800, 5800, 3400, 3200, 3200, 3000, 2800, 2700,
    2400, 2200, 1900, 1893, 1800, 1800, 1800, 1600, 1500, 1500
]

# Reverse to match the image order (highest at top)
plugins.reverse()
downloads.reverse()

# Replace other plugin names with empty string, keep PlayerHUD
labels = [name if name == "PlayerHUD" else "" for name in plugins]
colors = ["#f97316" if name == "PlayerHUD" else "#e5e7eb" for name in plugins]

fig, ax = plt.subplots(figsize=(10, 7))
fig.patch.set_facecolor('white')

bars = ax.barh(np.arange(len(downloads)), downloads, color=colors, height=0.7)

ax.set_yticks(np.arange(len(downloads)))
ax.set_yticklabels(labels, fontweight='bold', fontsize=12, color='#1f2937')
ax.set_xlabel("Número de Downloads", fontsize=11, color='#4b5563', labelpad=10)

# Formatting
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['bottom'].set_color('#d1d5db')
ax.tick_params(axis='y', length=0)
ax.tick_params(axis='x', colors='#6b7280')

ax.xaxis.grid(True, linestyle='--', alpha=0.4, color='#9ca3af')
ax.set_axisbelow(True)

# Add value label only for PlayerHUD
for i, bar in enumerate(bars):
    if plugins[i] == "PlayerHUD":
        width = bar.get_width()
        ax.text(width + 200, bar.get_y() + bar.get_height()/2, 
                f'{int(width):,} downloads', 
                ha='left', va='center', fontweight='bold', color='#ea580c', fontsize=11)
        
        # Add a note about the timeframe
        ax.text(width + 200, bar.get_y() - bar.get_height()/4, 
                'em apenas 4 meses', 
                ha='left', va='center', color='#ea580c', fontsize=9, fontstyle='italic')

plt.title("PlayerHUD entre os Blocos mais Baixados do Moodle", fontsize=16, fontweight='bold', pad=20, color='#111827')
plt.tight_layout()
plt.savefig("/home/ubuntu/jeanlucio-github-io/public/images/playerhud-downloads-chart.png", dpi=150, bbox_inches='tight')
print("Chart generated successfully.")
