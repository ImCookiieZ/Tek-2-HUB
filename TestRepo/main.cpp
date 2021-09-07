#include <iostream>
#include<stdio.h>

int func()
{
    char str[100];
    char rev[100];
    char *sptr = str; // sptr stores the base address of the str
    char *rptr = rev; // rptr stores the base address of the reverse
    int i = -1;

    printf("\n\nEnter a string: ");
    scanf("%s", str);

    while(*sptr)
    {
        sptr++;
        i--;
    }

    while(i < 0)
    {
        sptr--;
        *rptr = *sptr;
        rptr++;
        i++;
    }

    *rptr = '\0';
    rptr = rev;
    while(*rptr)
    {
        sptr++;
        *sptr = *rptr;
        rptr++;
    }

    printf("\n\nReverse of the string is: %s ", str);
    return 0;
}

int main()
{
    int(*fptr)();

    fptr = func;

    fptr();

    printf("\n\n\t\t\tCoding is Fun !\n\n\n");
    return 0;
}
