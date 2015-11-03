//
//  OctoscreenView.m
//  Octoscreen
//
//  Created by Steve Smith on 6/23/15.
//  Copyright (c) 2015 Steve Smith. All rights reserved.
//

#import "OctoscreenView.h"

@implementation OctoscreenView


- (instancetype)initWithFrame:(NSRect)frame isPreview:(BOOL)isPreview
{
    self = [super initWithFrame:frame isPreview:isPreview];
    if (self) {
      webView = [[WebView alloc] initWithFrame:[self bounds] frameName:nil groupName:nil];
      [webView setDrawsBackground:NO];
      [webView setMainFrameURL:[NSString stringWithFormat:@"file://%@/assets/player/KeynoteDHTMLPlayer.html", [[NSBundle bundleForClass:[self class]] resourcePath]]];
      [self addSubview:webView];
      [webView setAutoresizesSubviews:YES];
      [webView setAutoresizingMask:NSViewHeightSizable|NSViewWidthSizable];
      CGFloat width = 1280;
      CGFloat height = 760;
      
      
      
      CGFloat ww = self.bounds.size.width / width;
      CGFloat hh = self.bounds.size.height / height;
      
      CGFloat vv = MAX(ww, hh);
      
      webView.layer.transform = CATransform3DMakeScale(vv, vv, 1);
      
    }
    return self;
}

- (void)startAnimation
{
    [super startAnimation];
}

- (void)stopAnimation
{
    [super stopAnimation];
}

- (void)drawRect:(NSRect)rect
{
  [super drawRect:rect];
}

- (void)animateOneFrame
{
    return;
}

- (BOOL)hasConfigureSheet
{
    return YES;
}

- (NSWindow*)configureSheet
{
    if (!configSheet)
    {
        if (![NSBundle loadNibNamed:@"ConfigureSheet" owner:self])
        {
            NSLog( @"Failed to load configure sheet." );
            NSBeep();
        }
    }
    
    return configSheet;
}

- (IBAction)okClick:(id)sender
{
  /*NSArray* cells = originalsMatrix.selectedCells;
  for (NSCell *cell in cells) {
    NSString *execThis = [NSString stringWithFormat:@"consumePrefs(%@);", cell.stringValue];
    [webView stringByEvaluatingJavaScriptFromString:execThis];
  }*/
  
  [[NSApplication sharedApplication] endSheet:configSheet];
}

- (IBAction)cancelClick:(id)sender
{
    [[NSApplication sharedApplication] endSheet:configSheet];
}

@end
