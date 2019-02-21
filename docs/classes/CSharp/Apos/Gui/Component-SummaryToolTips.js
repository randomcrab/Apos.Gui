NDSummary.OnToolTipsLoaded("CSharpClass:Apos.Gui.Component",{140:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype140\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">Apos.&#8203;Gui.</span>&#8203;Component</div></div></div><div class=\"TTSummary\">The core of a user interface.&nbsp; Handles everything from how to handle updates and inputs, to how something is drawn.</div></div>",142:"<div class=\"NDToolTip TConstructor LCSharp\"><div id=\"NDPrototype142\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Component()</div><div class=\"TTSummary\">Creates an empty component that doesn\'t really do anything.&nbsp; You can script this but usually this is better as a base class for other components.</div></div>",143:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype143\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Point Position { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The component\'s position in UI coordinates. Defaults to 0, 0.</div></div>",144:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype144\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> Width { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The component\'s width in UI coordinates. Defaults to 100.</div></div>",145:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype145\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> Height { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The component\'s height in UI coordinates. Defaults to 100.</div></div>",146:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype146\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> PrefWidth { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The components\'s preferred width. This might or might not be honored by layout managers.&nbsp; Returns the width by default.&nbsp; It\'s a good idea to override this for custom components.</div></div>",147:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype147\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> PrefHeight { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The components\'s preferred height. This might or might not be honored by layout managers.&nbsp; Returns the height by default.&nbsp; It\'s a good idea to override this for custom components.</div></div>",149:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype149\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> Left { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The component\'s left position. This is the same as Position.X.</div></div>",150:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype150\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> Top { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The component\'s top position. This is the same as Position.Y.</div></div>",152:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype152\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> Right { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The component\'s right position. This is the same as Position.X + Width.</div></div>",153:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype153\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual int</span> Bottom { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The component\'s bottom position. This is the same as Position.Y + Height.</div></div>",154:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype154\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Rectangle BoundingRect { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The component\'s full bounding rectangle. It is defined by left, top, width, height.</div></div>",155:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype155\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Rectangle ClippingRect { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Visible area of a component.</div></div>",156:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype156\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Option&lt;Component&gt; Parent { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Parents usually manage their children. Defaults to none.</div></div>",157:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype157\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual bool</span> OldIsHovered { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Holds the previous state of the IsHovered property.</div></div>",158:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype158\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual bool</span> IsHovered { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Represents the component\'s current hover state.&nbsp; A component needs a hover condition for this to do anything.</div></div>",159:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype159\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual bool</span> IsFocusable { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">True when the component can be focused. Defaults to false.</div></div>",160:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype160\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual bool</span> HasFocus { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">True when a component currently has focus.</div></div>",161:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype161\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Action&lt;Component&gt; GrabFocus { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The component can use this to ask to grab focus. By default this does nothing.</div></div>",162:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype162\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddHoverCondition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;Component, <span class=\"SHKeyword\">bool</span>&gt;&nbsp;</td><td class=\"PName last\">c</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">When the function is true, the component is considered hovered.</div></div>",163:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype163\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddAction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;Component, <span class=\"SHKeyword\">bool</span>&gt;&nbsp;</td><td class=\"PName last\">c,</td></tr><tr><td class=\"PType first\">Func&lt;Component, <span class=\"SHKeyword\">bool</span>&gt;&nbsp;</td><td class=\"PName last\">o</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Provides a way to script components. Associates a condition to an action.&nbsp; It is possible for a component to have many conditions and many actions.&nbsp; For example, a button could do two different actions on a left mouse click and on a right mouse click.</div></div>",164:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype164\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Component GetPrevious()</div><div class=\"TTSummary\">If this component has a parent, it will ask the parent to return this component\'s previous neighbor.&nbsp; Otherwise, it will return itself.</div></div>",166:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype166\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Component GetNext()</div><div class=\"TTSummary\">If this component has a parent, it will ask the parent to return this component\'s next neighbor.&nbsp; Otherwise, it will return itself.</div></div>",167:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype167\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual</span> Component GetPrevious(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Component&nbsp;</td><td class=\"PName last\">c</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">This function is used by components that manage children.&nbsp; It will try to return a child that is previous to another component.</div></div>",168:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype168\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual</span> Component GetNext(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Component&nbsp;</td><td class=\"PName last\">c</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">This function is used by components that manage children.&nbsp; It will try to return a child that is next to another component.</div></div>",172:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype172\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Component GetFinal()</div><div class=\"TTSummary\">This is used to sink down a component hierarchy from a parent down to a child.&nbsp; If a parent has children, it will return the first one.</div></div>",173:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype173\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual</span> Component GetFinalInverse()</div><div class=\"TTSummary\">This is used to sink down a component hierarchy from a parent down to a child.&nbsp; If a parent has children, it will return the last one.</div></div>",174:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype174\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Rectangle ClipRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Rectangle&nbsp;</td><td class=\"PName last\">rect1</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Clips a rectangle against this component\'s bounding rectangle.</div></div>",175:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype175\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual bool</span> IsInside(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">p</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if a point is within this component\'s bounding rectangle.</div></div>",217:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype217\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual bool</span> IsInsideClip(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">p</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if a point is within this component\'s clipping rectangle.</div></div>",224:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype224\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual void</span> SetScissor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SpriteBatch&nbsp;</td><td class=\"PName last\">s</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the drawing limits for this component.</div></div>",273:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype273\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual void</span> ResetScissor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SpriteBatch&nbsp;</td><td class=\"PName last\">s</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Cleans up the drawing limits that were set by SetScissor.</div></div>",275:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype275\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual void</span> UpdateSetup()</div><div class=\"TTSummary\">Called at the start of the update loop.&nbsp; This is generally used to call layout managers or other updates that don\'t rely on inputs but are used by inputs.</div></div>",299:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype299\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual bool</span> UpdateInput()</div><div class=\"TTSummary\">Called to process user inputs.&nbsp; Separating the logic for inputs makes it easy to freeze inputs on components or the while UI.</div></div>",306:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype306\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public virtual void</span> Update()</div><div class=\"TTSummary\">The final update step.&nbsp; This is useful for updates that need to run after inputs but aren\'t inputs themselves.&nbsp; For example animations.</div></div>",307:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype307\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual void</span> Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SpriteBatch&nbsp;</td><td class=\"PName last\">s</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The component\'s draw function.</div></div>",308:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype308\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> Rectangle ClipRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Rectangle&nbsp;</td><td class=\"PName last\">rect1,</td></tr><tr><td class=\"PType first\">Rectangle&nbsp;</td><td class=\"PName last\">rect2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Clips a rectangle against another rectangle.</div></div>",309:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype309\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> IsInside(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Rectangle&nbsp;</td><td class=\"PName last\">r,</td></tr><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">p</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if a point is within a rectangle\'s boundaries exclusively.</div></div>",310:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype310\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Option&lt;Rectangle&gt; _clippingRect</div><div class=\"TTSummary\">The clipping rectangle that this component might or might not have.</div></div>",311:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype311\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Rectangle _oldScissor</div><div class=\"TTSummary\">A field to store the scissor information before overwriting it.</div></div>",312:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype312\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> List&lt;Func&lt;Component, <span class=\"SHKeyword\">bool</span>&gt;&gt; _hoverConditions</div><div class=\"TTSummary\">A list with all the condition for when a component is hovered.</div></div>",313:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype313\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> List&lt;ConditionOperation&gt; _conditionOperations</div><div class=\"TTSummary\">A list that holds conditions and their associated actions.</div></div>"});