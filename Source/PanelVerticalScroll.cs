﻿using System;
using Microsoft.Xna.Framework;

namespace Apos.Gui {
    /// <summary>
    /// Goal: Container that can hold Components.
    ///       It can also be scrolled over using the mouse wheel.
    /// </summary>
    public class PanelVerticalScroll : Panel {
        // Group: Constructors
        public PanelVerticalScroll() { }

        // Group: Public Functions
        public override bool UpdateInput() {
            bool isUsed = base.UpdateInput();

            if (!isUsed && IsHovered) {
                int scrollWheelDelta = GuiHelper.ScrollWheelDelta();
                if (scrollWheelDelta != 0) {
                    Offset = new Point(Offset.X, (int) Math.Min(Math.Max(Offset.Y + scrollWheelDelta, ClippingRect.Height - Size.Height), 0));
                    isUsed = true;
                }
            }

            return isUsed;
        }
    }
}