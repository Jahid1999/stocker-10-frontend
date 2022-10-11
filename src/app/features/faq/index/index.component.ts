import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-faq-mini-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public treeControl: any = new NestedTreeControl<any>(node => node.description);
  public dataSource: any = new MatTreeNestedDataSource<any>();
  public itemNumber: any = 0;
  public itemHeading: any = '';
  public data = [
    {
      heading : "What is STOCKER.AI?",
      description : "STOCKER.AI provides investors with high-quality technical\n" +
        "        charts for stocks, funds and indexes from Bangladesh. From our website\n" +
        "        users can get a clear idea about the current stock trends of the country\n" +
        "        which will help them in their investment decisions. Users can also add\n" +
        "        technical indicators to analyze stocks and determine advantageous buy\n" +
        "        and sell levels. Many other kinds of technical charting tools are also\n" +
        "        available on the website."
    },
    {
      heading : "I am new to STOCKER.AI. Where should I start?",
      description : "At the landing page of our website you’ll see a list of\n" +
        "        stocks and their price, price change information etc. You can visualize\n" +
        "        data and compare stocks with the chart provided at the lower half of the\n" +
        "        page. Where you want to go from there is up to you."
    },
    {
      heading : "I am having trouble using your site. What should I do?",
      description : "<p>\n" +
        "        If you're experiencing technical difficulties while using\n" +
        "        STOCKER.AI, try out some of the options below. These are generally\n" +
        "        pretty effective at fixing user issues on our website.\n" +
        "      </p>\n" +
        "      <ul>\n" +
        "        <li>\n" +
        "          Make sure that you have enabled support for cookies from our site.\n" +
        "        </li>\n" +
        "        <li>\n" +
        "          If you have any Internet or Privacy Filters installed, make sure that\n" +
        "          you have added “STOCKER.AI” to the “Allowed Sites” lists for those\n" +
        "          programs.\n" +
        "        </li>\n" +
        "        <li>\n" +
        "          Clear your browser's temporary file cache completely. Directions for\n" +
        "          your browser can be found at:\n" +
        "          <a href=\"https://www.refreshyourcache.com/en/home/\" target=\"_blank\"\n" +
        "            >https://www.refreshyourcache.com/</a\n" +
        "          >\n" +
        "        </li>\n" +
        "        <li>Try a different browser.</li>\n" +
        "        <li>Try a different device.</li>\n" +
        "        <li>Try a different internet connection.</li>\n" +
        "        <li>Restart your device</li>\n" +
        "      </ul>\n" +
        "      <p>\n" +
        "        These options will allow you to solve a whole host of problems. If these\n" +
        "        do not fix your problem, then go to our contact page for more\n" +
        "        suggestions.\n" +
        "      </p>"
    },
    {
      heading : "Have More Queries?",
      description : "Please visit our <a href='faq'>FAQ</a> page."
    }
  ]

  constructor() { }

  hasChild(index: number, node: any) {
    return (node?.description !== null);
  }

  ngOnInit(): void {
    this.dataSource.data = this.data
  }
  change(heading: string){
    this.itemHeading = this.itemHeading === heading ? '' : heading
  }

}
